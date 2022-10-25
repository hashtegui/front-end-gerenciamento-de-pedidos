import * as React from "react";
import { IOSProps } from "../../@types/os";

interface IOsProps {
  os: IOSProps | null;
  setOs: React.Dispatch<React.SetStateAction<IOSProps | null>>;
}

export const OsContext = React.createContext<IOsProps>({} as IOsProps);

export const OsProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [os, setOs] = React.useState<IOSProps | null>(null);

  return (
    <OsContext.Provider value={{ os, setOs }}>{children}</OsContext.Provider>
  );
};
