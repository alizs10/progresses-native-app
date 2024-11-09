import { create } from "zustand";


export const useSnackStore = create((set) => ({
    snack: null,
    visible: false,
    create: (text, action) => set(() => ({ snack: { text, action }, visible: true })),
    remove: () => set(() => ({ snack: null, visible: false }))
}))