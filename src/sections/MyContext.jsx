import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("Occasion");
  const [peoples, setPeoples] = useState("No. of Diners");
  const [times, setTimes] = useState("Select Time");

  return (
    <MyContext.Provider value={{ date, setDate, occasion, setSetting, peoples, setPeoples, times, setTimes }}>
      {children}
    </MyContext.Provider>
  );
};


export { MyContext, MyContextProvider };