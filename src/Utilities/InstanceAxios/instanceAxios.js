import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "http://localhost:9000",
});