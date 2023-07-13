import { create } from "zustand";

const useRegister = create((set) => ({
  message: "",
  responseStatus: null,
  error: null,
  recruterRegister: async (API, input) => {
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
      set({ message: result.message });
      set({ responseStatus: response.status });
    } catch (error) {
      set({ error });
    }
  },
  workerRegister: async (API, input) => {
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
      set({ message: result.message });
      set({ responseStatus: response.status });
    } catch (error) {
      set({ error });
    }
  },
}));

export default useRegister;
