import axios from "axios";

const api = (BASE_URL) => {
  const service = axios.create({
    baseURL: BASE_URL ?? process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      Authorization: "Bearer ",
      "Content-Type": "application/json",
    },
  });

  service.interceptors.request.use(
    async function (config) {
      let token = localStorage.getItem("digitoken");
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return service;
};

export default api;
