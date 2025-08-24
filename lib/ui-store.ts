"use client"

import { create } from "zustand"

export type AppKey = "about" | "art" | "philosophy" | "resume" | "palette" | null

type UIState = {
  activeApp: AppKey
  setActiveApp: (app: AppKey | ((prev: AppKey) => AppKey)) => void
}

export const useUIStore = create<UIState>((set) => ({
  activeApp: "about",
  setActiveApp: (app) =>
    set((s) => ({
      activeApp: typeof app === "function" ? (app as (p: AppKey) => AppKey)(s.activeApp) : app,
    })),
}))
