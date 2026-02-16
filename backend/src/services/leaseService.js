const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const Lease = require('../models/Lease');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const LEASES_TABLE = process.env.LEASES_TABLE;

class LeaseService {
  async createLease(data) {
    const lease = new Lease({ ...data, leaseId: uuidv4() });
    lease.validate();

    await dynamodb.put({
      TableName: LEASES_TABLE,
      Item: lease
    }).promise();

    return lease;
  }

  async getAllLeases() {
    const result = await dynamodb.scan({
      TableName: LEASES_TABLE
    }).promise();
    return result.Items;
  }
}

module.exports = new LeaseService();