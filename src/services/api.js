import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-s5uq.onrender.com"
})