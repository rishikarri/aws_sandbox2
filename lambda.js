const AWS = require('aws-sdk');

const lambda = new AWS.Lambda(); // lambda client

const params = {
  FunctionName: 's3-writer-lambda', // Replace with your Lambda function ARN
  Payload: JSON.stringify({ 
    // Your payload data here
    message: 'Hello from IAC!',
    data: { 
      key1: 'value1',
      key2: 'value2'
    }
  })
};

lambda.invoke(params, (err, data) => {
  if (err) {
    console.error('Error invoking Lambda:', err);
  } else {
    console.log('Lambda invocation successful:', data);
  }
});