import React, { useState, useEffect } from 'react';

const TenantList = () => {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    // Mock data
    setTenants([
      { tenantId: '1', name: 'John Doe', email: 'john@email.com', phone: '555-0100' },
      { tenantId: '2', name: 'Jane Smith', email: 'jane@email.com', phone: '555-0200' }
    ]);
  }, []);

  return (
    <div>
      <h2>Tenants</h2>
      {tenants.map(tenant => (
        <div key={tenant.tenantId}>
          <h3>{tenant.name}</h3>
          <p>Email: {tenant.email} | Phone: {tenant.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default TenantList;