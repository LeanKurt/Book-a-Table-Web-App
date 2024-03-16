import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [date, setDate] = useState("");
  const [setting, setSetting] = useState("");
  const [peoples, setPeoples] = useState("No. of Diners");
  const [times, setTimes] = useState("Select Time");

  return (
    <MyContext.Provider value={{ date, setDate, setting, setSetting, peoples, setPeoples, times, setTimes }}>
      {children}
    </MyContext.Provider>
  );
};


export { MyContext, MyContextProvider };