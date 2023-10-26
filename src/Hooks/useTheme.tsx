import { useEffect, useLayoutEffect, useState } from "react";

export default function useTheme() {
  const [dark, setDark] = useState(false);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    if (!manual) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      if (prefersDark.matches) {
        setDark(true);
      } else {
        setDark(false);
      }
      prefersDark.addEventListener("change", (e) => setDark(e.matches));

      return () => prefersDark.removeEventListener("change", (e) => setDark(e.matches));
    }
  }, [dark, manual]);

  useLayoutEffect(() => {
    const elem = document.querySelector("[data-bs-theme]");
    if (dark) {
      elem?.setAttribute("data-bs-theme", "dark");
    } else {
      elem?.setAttribute("data-bs-theme", "light");
    }
  }, [dark]);

  return { setDark, setManual };
}
