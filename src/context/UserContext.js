import React, { useContext, useState } from "react";

const UserContext = React.createContext(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);

  return context;
};

export const UserContextProvider = ({ children, storageUser }) => {
  const [user, setUser] = useState(storageUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
