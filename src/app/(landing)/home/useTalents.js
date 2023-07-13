import { create } from "zustand";

const useTalents = create((set) => ({
  talents: [],
  totalPage: 0,
  currentPage: 1,
  sort: "asc",
  keyword: "",
  loading: false,
  error: null,
  fetchTalents: async (api, token) => {
    try {
      const res = await fetch(api, {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const result = await res.json();
      set({ talents: result.data });
      set({ totalPage: result.total_page });
    } catch (error) {
      set({ error });
    }
  },
  nextPage: (v) => set({ currentPage: v }),
  sorting: (v) => set({ sort: v }),
  searching: (v) => set({ keyword: v }),
}));

export default useTalents;
