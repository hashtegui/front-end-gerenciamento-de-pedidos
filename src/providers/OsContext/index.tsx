import * as React from "react";
import { IOSProps } from "../../@types/os";

interface OsProps {
  os: IOSProps | null;
  setOs: React.Dispatch<React.SetStateAction<IOSProps | null>>;
}

type Props = {
  children?: React.ReactNode;
};

export const OsContext = React.createContext<OsProps>({} as OsProps);

export const OsProvider: React.FC<Props> = ({ children }) => {
  const [os, setOs] = React.useState<IOSProps | null>(null);

  return (
    <OsContext.Provider value={{ os, setOs }}>{children}</OsContext.Provider>
  );
};
