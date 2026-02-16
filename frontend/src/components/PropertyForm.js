import React, { useState } from 'react';

const PropertyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    address: '',
    rent: '',
    bedrooms: '',
    bathrooms: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ address: '', rent: '', bedrooms: '', bathrooms: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Property</h3>
      <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
      <input name="rent" type="number" placeholder="Rent" value={formData.rent} onChange={handleChange} required />
      <input name="bedrooms" type="number" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} />
      <input name="bathrooms" type="number" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} />
      <button type="submit">Add Property</button>
    </form>
  );
};

export default PropertyForm;