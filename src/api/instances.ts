import axios from 'axios';

export const DummyJsonApi = axios.create({
  baseURL: import.meta.env.VITE_DUMMY_JSON_BASE_URL,
  timeout: 5000,
});
