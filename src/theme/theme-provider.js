"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider enableSystem enableColorScheme {...props}>
      {children}
    </NextThemesProvider>
  );
}
