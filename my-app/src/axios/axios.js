import axios from "axios";

export const BASE_URL = "http://localhost:3000";

const instance = axios.create({ baseURL: BASE_URL });

instance.interceptors.request.use(async (req) => {
  const token = JSON.parse(localStorage.getItem("user"));
  req.headers = {
    ...req.headers,
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  return req;
});

instance.interceptors.response.use(
  (response) => {
    if (response.data.access_token) {
      localStorage.setItem("user", JSON.stringify(response.data.access_token));
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
