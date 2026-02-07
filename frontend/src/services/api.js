const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const api = {
  async getProperties() {
    const response = await fetch(`${API_BASE_URL}/properties`);
    return response.json();
  },

  async createProperty(property) {
    const response = await fetch(`${API_BASE_URL}/properties`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(property)
    });
    return response.json();
  },

  async getTenants() {
    const response = await fetch(`${API_BASE_URL}/tenants`);
    return response.json();
  },

  async createTenant(tenant) {
    const response = await fetch(`${API_BASE_URL}/tenants`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tenant)
    });
    return response.json();
  }
};

export default api;