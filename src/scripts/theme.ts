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
  setGiscusTheme(theme);
}

// https://github.com/giscus/giscus/issues/336
export function setGiscusTheme(theme: Theme) {
  const getGiscusTheme = (theme: Theme) => {
    switch (theme) {
      case "light":
        return "light";
      case "dark":
        return "dark";
      default:
        return "preferred_color_scheme";
    };
  }

  function sendMessage(message: any) {
    const iframe = document.querySelector('iframe.giscus-frame') as HTMLIFrameElement | null;
    if (!iframe || !iframe.contentWindow) return;
    iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
  }
  sendMessage({
    setConfig: {
      theme: getGiscusTheme(theme),
    },
  });
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
