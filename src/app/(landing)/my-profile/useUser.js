import { create } from "zustand";

const useUser = create((set) => ({
  responseAPI: null,
  userData: null,
  portofolio: null,
  skill: null,
  error: null,
  fetchData: () => {
    const data = JSON.parse(window.localStorage.getItem("user"));

    set({ userData: data });
  },
  fetchPortofolio: () => {
    const data = JSON.parse(window.localStorage.getItem("user"));

    set({ portofolio: data.data.portofolio });
  },
  fetchSkill: async (API, JWT) => {
    try {
      const response = await fetch(API, {
        headers: {
          Authorization: `Bearer ${JWT}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const result = await response.json();
      // console.log(result);
      set({ skill: result.data });
    } catch (error) {
      set({ error });
    }
  },
  deletePorto: async (token, id) => {
    try {
      const response = await fetch(
        `http://103.214.113.5:5000/portofolios/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const result = await response.json();
      // console.log(result);
      set({ responseAPI: result });
    } catch (error) {
      set({ error });
    }
  },
}));

export default useUser;
