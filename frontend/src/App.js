import React from 'react';
import PropertyList from './components/PropertyList';
import TenantList from './components/TenantList';

function App() {
  return (
    <div>
      <h1>Rental Management System</h1>
      <PropertyList />
      <TenantList />
    </div>
  );
}

export default App;