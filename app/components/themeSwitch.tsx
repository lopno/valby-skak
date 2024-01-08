"use client";

import * as React from "react";
import { Switch } from "@nextui-org/switch";
import { SunIcon } from "./icons/sunIcon";
import { MoonIcon } from "./icons/moonIcon";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) return null;

  return (
    <Switch
      aria-label="Skift mellem lyst og mørkt tema"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      color="warning"
      isSelected={currentTheme === "light"}
      onValueChange={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    />
  );
}
