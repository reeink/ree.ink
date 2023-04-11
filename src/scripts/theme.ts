const allThemes = new Set(["auto", "light", "dark"] as const);
const allThemesArray = Array.from(allThemes);
const ThemesCount = allThemes.size;
type Theme = typeof allThemes extends Set<infer T> ? T : never;

export function getPrefersColorScheme(): Theme {
  const localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme && allThemes.has(localStorageTheme as any)) {
    return localStorageTheme as Theme;
  } else {
    return "auto";
  }
}

export function getCurrentColorTheme() {
  const root = document.documentElement;
  const theme = root.getAttribute("theme");
  if (theme && allThemes.has(theme as any)) {
    return theme as Theme;
  } else {
    return 'auto';
  }
}

export function setCurrentColorTheme(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("theme", theme);
}

export function savePrefersColorScheme(theme: Theme) {
  localStorage.setItem("theme", theme);
}

export function toggleThemeByIndex() {
  const currentTheme = getCurrentColorTheme();
  let i = 0;
  for (; i < ThemesCount; i++) {
    if (allThemesArray[i] === currentTheme) {
      break;
    }
  }
  const nextTheme = allThemesArray[(i + 1) % ThemesCount];
  setCurrentColorTheme(nextTheme);
  savePrefersColorScheme(nextTheme);
}
