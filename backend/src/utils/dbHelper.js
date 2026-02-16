const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const dbHelper = {
  async getItem(tableName, key) {
    const params = {
      TableName: tableName,
      Key: key
    };
    const result = await dynamodb.get(params).promise();
    return result.Item;
  },

  async putItem(tableName, item) {
    const params = {
      TableName: tableName,
      Item: item
    };
    await dynamodb.put(params).promise();
    return item;
  },

  async scanTable(tableName) {
    const params = { TableName: tableName };
    const result = await dynamodb.scan(params).promise();
    return result.Items;
  },

  async deleteItem(tableName, key) {
    const params = {
      TableName: tableName,
      Key: key
    };
    await dynamodb.delete(params).promise();
  }
};

module.exports = dbHelper;