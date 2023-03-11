require("dotenv").config();

const serverless = require("serverless-http");
const express = require("express");
const { faker } = require("@faker-js/faker");
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DB_URL);

const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.get("/email", (req, res, next) => {
  return res.status(200).json({
    email: faker.internet.email(),
  });
});

app.get("/<endpoint>", async (req, res, next) => {
  const db = await client.db(process.env.DB_NAME);
  const collection = await db.collection("<collection_name>");
  const body = await collection.find({}).toArray();
  return res.status(200).json({
    result: body,
  });
});
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
