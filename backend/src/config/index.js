module.exports = {
  aws: {
    region: process.env.AWS_REGION || 'us-east-1',
    stage: process.env.STAGE || 'dev'
  },
  tables: {
    properties: process.env.PROPERTIES_TABLE,
    tenants: process.env.TENANTS_TABLE,
    leases: process.env.LEASES_TABLE
  },
  cors: {
    origin: '*',
    headers: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
};