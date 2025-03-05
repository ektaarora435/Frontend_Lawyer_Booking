import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Change this if needed

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Authentication APIs
export const AuthService = {
  login: (credentials) => api.post("/auth/login", credentials),
  signup: (userData) => api.post("/auth/signup", userData),
  getUser: (userId) => api.get(`/users/${userId}`),
};

// Lawyer APIs
export const LawyerService = {
  getAll: () => api.get("/lawyers"),
  getById: (lawyerId) => api.get(`/lawyers/${lawyerId}`),
  submitRating: (lawyerId, ratingData) => api.post(`/lawyers/${lawyerId}/ratings`, ratingData),
};

export default api;
