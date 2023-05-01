import { getCookie } from "@/utils/getCookie";
import axios from "axios";

export const axiosInstance = (type: "front" | "server") => {
  const token = getCookie(type);
  if (!token) return new Error("unAuthrized");

  axios.create({
    baseURL: "",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
