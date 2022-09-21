import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://robotblog.herokuapp.com",
});
