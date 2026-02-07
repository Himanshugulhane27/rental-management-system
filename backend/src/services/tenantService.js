const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const Tenant = require('../models/Tenant');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const TENANTS_TABLE = process.env.TENANTS_TABLE;

class TenantService {
  async createTenant(data) {
    const tenant = new Tenant({ ...data, tenantId: uuidv4() });
    tenant.validate();

    await dynamodb.put({
      TableName: TENANTS_TABLE,
      Item: tenant
    }).promise();

    return tenant;
  }

  async getAllTenants() {
    const result = await dynamodb.scan({
      TableName: TENANTS_TABLE
    }).promise();
    return result.Items;
  }
}

module.exports = new TenantService();