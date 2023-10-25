import { useEffect, useLayoutEffect, useState } from "react";

export default function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDark.matches) {
      setDark(true);
    }

    prefersDark.addEventListener("change", (e) => setDark(e.matches));

    return () => prefersDark.removeEventListener("change", (e) => setDark(e.matches));
  }, [dark]);

  useLayoutEffect(() => {
    const elem = document.querySelector("[data-bs-theme]");
    if (dark) {
      elem?.setAttribute("data-bs-theme", "dark");
    } else {
      elem?.setAttribute("data-bs-theme", "light");
    }
  }, [dark]);
}
