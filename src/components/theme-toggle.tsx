"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { 
  ThemeToggler, 
  type Resolved, 
  type ThemeSelection 
} from '@animate-ui/react/primitives/effects/theme-toggler';

import {
  ThemeTogglerButton,
  ThemeTogglerButtonIcon,
} from '@/components/animate-ui/buttons/theme-toggler';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2"/><path d="M12 20v2"/>
    <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
    <path d="M2 12h2"/><path d="M20 12h2"/>
    <path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />;

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <ThemeToggler
      theme={theme as ThemeSelection}
      resolvedTheme={resolvedTheme as Resolved}
      setTheme={setTheme}
      direction={currentTheme === 'light' ? 'ltr' : 'rtl'}
    >
      {({ effective, toggleTheme }) => (
        <ThemeTogglerButton
          theme={effective as ThemeSelection}
          resolvedTheme={resolvedTheme as Resolved}
          setTheme={toggleTheme}
          modes={['light', 'dark']}
          aria-label="Toggle theme"
          variant="ghost"
          hoverScale={1.08}
          tapScale={0.92}
          className="text-muted hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
        >
          <ThemeTogglerButtonIcon light={<SunIcon />} dark={<MoonIcon />} rotate={180} />
        </ThemeTogglerButton>
      )}
    </ThemeToggler>
  );
}