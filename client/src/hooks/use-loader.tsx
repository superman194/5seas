import { createContext, useContext, useState, useCallback, useTransition } from "react";

interface LoaderContextValue {
  isLoading: boolean;
  isPending: boolean;
  show: () => void;
  hide: () => void;
  startNavigating: (fn: () => void) => void;
}

const LoaderContext = createContext<LoaderContextValue>({
  isLoading: false,
  isPending: false,
  show: () => {},
  hide: () => {},
  startNavigating: (fn) => fn(),
});

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const show = useCallback(() => setIsLoading(true), []);
  const hide = useCallback(() => setIsLoading(false), []);

  const startNavigating = useCallback(
    (fn: () => void) => {
      startTransition(fn);
    },
    [startTransition]
  );

  return (
    <LoaderContext.Provider value={{ isLoading, isPending, show, hide, startNavigating }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}
