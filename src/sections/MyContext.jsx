import React, { createContext } from 'react'
import { useState } from 'react';

const TableData = createContext();
const MyContext = ({children}) => {
  const [occasion, setOccasion] = useState("Occasion");
  const [setting, setSetting] = useState("")
  const [date, setDate] = useState("");
  const [peoples, setPeoples] = useState("No. of Diners");
  const [times, setTimes] = useState("Select Time");
  return (
    <TableData.Provider value={{occasion,setOccasion,setting,setSetting,
    date, setDate, peoples, setPeoples, times, setTimes}}>
        {children}
    </TableData.Provider>
  )
}

export default {MyContext, TableData}