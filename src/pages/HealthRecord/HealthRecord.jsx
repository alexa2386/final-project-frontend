import React from 'react'
import './HealthRecord.css'

function HealthRecordForm() {
  const [formData, setFormData] = useState({ dogId: '', record: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/health-records', formData)
      .then(response => alert('Health record updated'))
      .catch(error => alert('Error updating record'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dog ID:
        <input type="text" name="dogId" value={formData.dogId} onChange={handleChange} required />
      </label>
      <label>
        Record:
        <textarea name="record" value={formData.record} onChange={handleChange} required></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default HealthRecordForm