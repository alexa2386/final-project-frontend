import React from 'react'
import './DogForm.css'

function DogForm() {
  const [formData, setFormData] = useState({ name: '', breed: '', age: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/dogs', formData)
      .then(response => alert('Dog added successfully'))
      .catch(error => alert('Error adding dog'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Breed:
        <input type="text" name="breed" value={formData.breed} onChange={handleChange} required />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DogForm;