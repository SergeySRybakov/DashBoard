import axios from "axios";
export const apiClient = new axios.create({
    baseURL: './static/backend/'
  });