const API_BASE_URL = 'http://localhost:5000';

export async function fetchDogs() {
  const response = await fetch(`${API_BASE_URL}/dogs`);
  return response.json();
}

export async function fetchBookings() {
  const response = await fetch(`${API_BASE_URL}/bookings`);
  return response.json();
}
