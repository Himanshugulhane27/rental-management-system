const { success, error } = require('../utils/response');
const tenantService = require('../services/tenantService');

exports.handler = async (event) => {
  try {
    const { httpMethod, body } = event;

    switch (httpMethod) {
      case 'GET':
        const tenants = await tenantService.getAllTenants();
        return success(tenants);
      case 'POST':
        const newTenant = await tenantService.createTenant(JSON.parse(body));
        return success(newTenant);
      default:
        return error('Method not allowed');
    }
  } catch (err) {
    return error(err.message);
  }
};