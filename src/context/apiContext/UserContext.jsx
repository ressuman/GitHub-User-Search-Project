import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const updateData = (newUser) => {
    setUserData(() => newUser);
  };

  return (
    <UserContext.Provider value={{ userData, updateData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
