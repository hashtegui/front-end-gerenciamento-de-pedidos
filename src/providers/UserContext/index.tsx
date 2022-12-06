import * as React from "react";

type User = { username: string; password: string; acesstoken?: string };
interface UserProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

type Props = {
  children?: React.ReactNode;
};

export const UserContext = React.createContext<UserProps>({} as UserProps);

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = React.useState<User>({} as User);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
