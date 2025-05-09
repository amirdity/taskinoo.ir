import axios from "@/lib/axios";

export const signup = async (data: { email: string; password: string }) => {
  const response = await axios.post("/auth/signup", data);
  return response.data;
};
