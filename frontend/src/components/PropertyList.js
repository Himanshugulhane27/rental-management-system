import React, { useState, useEffect } from 'react';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Mock data
    setProperties([
      { propertyId: '1', address: '123 Main St', rent: 1200, bedrooms: 2 },
      { propertyId: '2', address: '456 Oak Ave', rent: 1500, bedrooms: 3 }
    ]);
  }, []);

  return (
    <div>
      <h2>Properties</h2>
      {properties.map(property => (
        <div key={property.propertyId}>
          <h3>{property.address}</h3>
          <p>Rent: ${property.rent} | Bedrooms: {property.bedrooms}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;