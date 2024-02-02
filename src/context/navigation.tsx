import { createContext, useState, useEffect } from "react";

interface NavigationProps {
  children: any;
}

interface NavigationContextType {
  currentPath: string;
  navigate: (toPath: string) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  currentPath: "/",
  navigate: () => undefined,
});

const NavigationProvider = ({ children }: NavigationProps) => {
  // default value for when our app first starts up (whatever path the user navigted to)
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // fn that handles the user navigating forward / back in the browswer
    // we are setting state to force a re-render when the user navigates forward / back
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = (pathTo: string) => {
    window.history.pushState({}, "", pathTo);
    setCurrentPath(pathTo);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
