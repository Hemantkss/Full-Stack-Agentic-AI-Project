import { useEffect } from "react";
import { GuiStore } from "./GuiStore";


export function GuiToggle() {
  const open = GuiStore((s) => s.open);
  const close = GuiStore((s) => s.close);

  useEffect(() => {
    const onKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (key === "*") open();
      if (key === "*") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);
}
