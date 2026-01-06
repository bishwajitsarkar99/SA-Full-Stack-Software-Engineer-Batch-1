import axios from "axios";

const API_BASE_URL = "http://localhost:5001/api"; // backend base url

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Required for sessions
});

// Interceptor for JWT tokens
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
