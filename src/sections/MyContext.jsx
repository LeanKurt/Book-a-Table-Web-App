import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("Occasion");
  const [peoples, setPeoples] = useState("No. of Diners");
  const [times, setTimes] = useState("Select Time");
const [ setting , setSetting] = useState('');
  return (
    <MyContext.Provider value={{ date, setDate, occasion, setOccasion, peoples, setPeoples, times, setTimes, setting , setSetting }}>
      {children}
    </MyContext.Provider>
  );
};


export { MyContext, MyContextProvider };