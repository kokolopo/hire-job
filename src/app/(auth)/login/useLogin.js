import { create } from "zustand";
import { setCookie } from "cookies-next";

const useLogin = create((set) => ({
  responseAPI: null,
  message: "",
  responseStatus: null,
  error: null,
  recruterLogin: async (API, input) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
        credentials: "include",
      });
      const result = await response.json();
      // console.log(result);
      set({ responseAPI: result });
      set({ message: result.message });
      set({ responseStatus: response.status });

      setCookie("accessToken", result.token);
      window.localStorage.setItem("user", JSON.stringify(result));
      window.localStorage.setItem("role", result.data.role);
    } catch (error) {
      set({ error });
    }
  },
  workerLogin: async (API, input) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
        credentials: "include",
      });
      const result = await response.json();
      // console.log(result);
      set({ responseAPI: result });
      set({ message: result.message });
      set({ responseStatus: response.status });

      setCookie("accessToken", result.token);
      setCookie("userId", result.data.id);
      window.localStorage.setItem("user", JSON.stringify(result));
      window.localStorage.setItem("role", result.data.role);
    } catch (error) {
      set({ error });
    }
  },

  logout: () => localStorage.clear(),
}));

export default useLogin;
