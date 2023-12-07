import { createContext, useState } from "react";

const NavigationContext = createContext({});

interface NavigationProps {
  children: any;
}

const NavigationProvider = ({ children }: NavigationProps) => {
  // default value for when our app first starts up (whatever path the user navigted to)
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  console.log("currentPath", currentPath);

  return (
    <NavigationContext.Provider value={{}}>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
