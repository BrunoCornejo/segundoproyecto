import { useEffect, useState } from "react";

// Named export (importalo con llaves)
export function useLocalStorage(key, initialValue) {
  const read = () => {
    try {
      const raw = localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const [value, setValue] = useState(read);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* noop */
    }
  }, [key, value]);

  return [value, setValue];
}
