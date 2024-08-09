import React from 'react'
import './BookingForm.css'
import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({ dogId: '', date: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/bookings', formData)
      .then(response => alert('Booking successful'))
      .catch(error => alert('Error booking appointment'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dog ID:
        <input type="text" name="dogId" value={formData.dogId} onChange={handleChange} required />
      </label>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;