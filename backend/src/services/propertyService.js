const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const Property = require('../models/Property');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const PROPERTIES_TABLE = process.env.PROPERTIES_TABLE;

class PropertyService {
  async createProperty(data) {
    const property = new Property({ ...data, propertyId: uuidv4() });
    property.validate();

    await dynamodb.put({
      TableName: PROPERTIES_TABLE,
      Item: property
    }).promise();

    return property;
  }

  async getAllProperties() {
    const result = await dynamodb.scan({
      TableName: PROPERTIES_TABLE
    }).promise();
    return result.Items;
  }
}

module.exports = new PropertyService();