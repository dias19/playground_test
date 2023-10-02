import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    token: null,
  });

  const updateToken = (token) => {
    setGlobalData({ ...globalData, token });
  };

  return (
    <GlobalContext.Provider value={{ globalData, updateToken }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
