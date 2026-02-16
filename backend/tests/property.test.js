const Property = require('../src/models/Property');

describe('Property Model', () => {
  test('should create property with valid data', () => {
    const data = {
      propertyId: '123',
      address: '123 Main St',
      rent: 1200,
      bedrooms: 2,
      bathrooms: 1
    };
    const property = new Property(data);
    expect(property.address).toBe('123 Main St');
    expect(property.rent).toBe(1200);
  });

  test('should throw error for missing required fields', () => {
    const property = new Property({ propertyId: '123' });
    expect(() => property.validate()).toThrow('Address and rent are required');
  });
});