import * as React from "react";
import { IOSProps } from "../../@types/os";

interface OsProps {
  os: IOSProps;
  setOs: React.Dispatch<React.SetStateAction<IOSProps>>;
}

type Props = {
  children?: React.ReactNode;
};

export const OsContext = React.createContext<OsProps>({} as OsProps);

export const OsProvider: React.FC<Props> = ({ children }) => {
  const [os, setOs] = React.useState<IOSProps>({} as IOSProps);

  return (
    <OsContext.Provider value={{ os, setOs }}>{children}</OsContext.Provider>
  );
};
