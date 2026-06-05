import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative rounded-md"
      onClick={toggleTheme}
      title="Theme"
      aria-label="Toggle theme"
    >
      <Sun className="absolute size-3.5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 " />
      <Moon className="size-3.5 scale-100 rotate-0 transition-all dark:-rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
