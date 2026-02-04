const { success, error } = require('../utils/response');
const propertyService = require('../services/propertyService');

exports.handler = async (event) => {
  try {
    const { httpMethod, body } = event;

    switch (httpMethod) {
      case 'GET':
        const properties = await propertyService.getAllProperties();
        return success(properties);
      case 'POST':
        const newProperty = await propertyService.createProperty(JSON.parse(body));
        return success(newProperty);
      default:
        return error('Method not allowed');
    }
  } catch (err) {
    return error(err.message);
  }
};