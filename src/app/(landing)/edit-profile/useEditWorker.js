import axios from "axios";
import { create } from "zustand";

const useEditWorker = create((set) => ({
  profile: null,
  responseAPI: null,
  responseStatus: null,
  loading: false,
  error: null,
  fetchProfile: async (API, JWT) => {
    try {
      const res = await fetch(API, {
        headers: {
          Authorization: `Bearer ${JWT}`,
          // "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const result = await res.json();
      set({ profile: result.data });
    } catch (error) {
      set({ error });
    }
  },
  addSkill: async (API, JWT, input) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${JWT}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
        credentials: "include",
      });
      const result = await response.json();
      // console.log(result);
      set({ responseAPI: result });
      set({ responseStatus: response.status });
    } catch (error) {
      set({ error });
    }
  },
  addPortofolio: async (API, JWT, input) => {
    const config = {
      headers: {
        Authorization: `Bearer ${JWT}`, // Ganti dengan token Anda
      },
      withCredentials: true,
    };

    set({ loading: true });
    try {
      const result = await axios.post(API, input, config);
      // console.log(result);
      set({ responseAPI: result.data });
      set({ responseStatus: result.status });
      set({ loading: false });
    } catch (error) {
      set({ error });
      set({ loading: false });
    }
  },
  addExperience: async (API, JWT, input) => {
    set({ loading: true });
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${JWT}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
        credentials: "include",
      });
      const result = await response.json();
      // console.log(result);
      set({ responseAPI: result });
      set({ responseStatus: response.status });
      set({ loading: false });
    } catch (error) {
      set({ error });
      set({ loading: false });
    }
  },
  updateProfile: async (API, JWT, input) => {
    set({ loading: true });
    try {
      const response = await fetch(API, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${JWT}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
        credentials: "include",
      });
      const result = await response.json();
      // console.log(result);
      set({ responseAPI: result });
      set({ responseStatus: response.status });
      set({ loading: false });
    } catch (error) {
      set({ error });
      set({ loading: false });
    }
  },
}));

export default useEditWorker;
