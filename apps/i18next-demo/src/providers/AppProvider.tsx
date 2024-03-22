'use client';

import { ThemeProvider } from './ThemeProvider';

export interface AppProviderProps {
  children?: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
