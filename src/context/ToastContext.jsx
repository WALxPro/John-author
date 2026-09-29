import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import ToastStack from "@/components/ui/ToastStack";

const ToastContext = createContext(() => {});

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timers = useRef([]);

  const toast = useCallback((message) => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((list) => [...list, { id, message }]);
    timers.current.push(setTimeout(() => setToasts((list) => list.filter((t) => t.id !== id)), 3800));
  }, []);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastStack toasts={toasts} />
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
