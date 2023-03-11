# AWS Lambda (serverless)

`under development`
`node v17.2.0`
`npm 8.1.4`

**Things to setup before you run this code**

1.  IAM role for a AWS user with programmatic access **AWSLambdaBasicExecutionRole**
2.  export AWS_ACCESS_KEY_ID=your-key-here
3.  export AWS_SECRET_ACCESS_KEY=your-secret-key-here
4.  **.env** file with your **DB_URL** and **DB_NAME**
5.  Global package `https://www.npmjs.com/package/serverless`

**NOTE: Create the connection to your DB only once (pooling helps scale); creating a new connection everytime endpoint is a horrible practice**

Below command to deploy your app (the endpoint URL will be in your AWS Lamda dashboard)

    serverless deploy

Hint: Modify the `serverless.yml` file to set your region and more.
