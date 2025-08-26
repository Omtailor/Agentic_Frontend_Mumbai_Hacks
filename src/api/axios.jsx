import axios from "axios";

const api = axios.create({
  baseURL: "https://sos-backend-zx8m.onrender.com/api/", 
  withCredentials: true, 
});

export default api;