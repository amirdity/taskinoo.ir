import { signup } from "@/lib/auth/signup";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
  });
};
