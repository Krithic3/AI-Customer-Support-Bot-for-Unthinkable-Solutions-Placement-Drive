"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const next = theme === "dark" ? "light" : "dark"

  return (
    <Button variant="outline" onClick={() => setTheme(next)} aria-label="Toggle theme" className="min-w-[6rem]">
      {theme === "dark" ? "Light" : "Dark"} mode
    </Button>
  )
}
