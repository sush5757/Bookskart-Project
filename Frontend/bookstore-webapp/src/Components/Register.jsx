import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    country: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear previous errors when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit the form (e.g., send data to server)
      console.log('Form submitted:', formData);
      // You can add logic here to send the data to the server
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.first_name.trim()) {
      errors.first_name = 'First Name is required';
    }
    if (!data.last_name.trim()) {
      errors.last_name = 'Last Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }
    if (!data.city.trim()) {
      errors.city = 'City is required';
    }
    if (!data.state.trim()) {
      errors.state = 'State is required';
    }
    if (!data.zip_code.trim()) {
      errors.zip_code = 'Zip Code is required';
    }
    if (!data.country.trim()) {
      errors.country = 'Country is required';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
    <div className="col-md-6">
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="mb-3">
        <label className="form-label">First Name:</label>
        <input type="text" className="form-control" name="first_name" value={formData.first_name} onChange={handleChange} />
        {errors.first_name && <span className="text-danger">{errors.first_name}</span>}
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name:</label>
        <input type="text" className="form-control" name="last_name" value={formData.last_name} onChange={handleChange} />
        {errors.last_name && <span className="text-danger">{errors.last_name}</span>}
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="text-danger">{errors.email}</span>}
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className="text-danger">{errors.password}</span>}
      </div>
      <div className="mb-3">
        <label className="form-label">Address:</label>
        <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
        {errors.address && <span className="text-danger">{errors.address}</span>}
      </div>
      <div className="mb-3">
        <label className="form-label">City:</label>
        <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} />
        {errors.city && <span className="text-danger">{errors.city}</span>}
      </div>
      <div className="mb-3">
        <label className="form-label">State:</label>
        <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} />
        {errors.state && <span className="text-danger">{errors.state}</span>}
      </div>
      <div className="mb-3">
        <label className="form-label">Zip Code:</label>
        <input type="text" className="form-control" name="zip_code" value={formData.zip_code} onChange={handleChange} />
        {errors.zip_code && <span className="text-danger">{errors.zip_code}</span>}
      </div>
      <div className="mb-3">
        <label className="form-label">Country:</label>
        <input type="text" className="form-control" name="country" value={formData.country} onChange={handleChange} />
        {errors.country && <span className="text-danger">{errors.country}</span>}
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
    </div>
    </div>
    </div>
  );
};

export default Register;
