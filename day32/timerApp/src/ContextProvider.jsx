import React, { createContext, useState } from 'react'
import { useContext } from 'react'

export const TimerContext = createContext(null)

const ContextProvider = ({ children }) => {
    const [time,setTiming]=useState({hours:0,minutes:0,seconds:0})

    return (
            <TimerContext.Provider value={{time,setTiming}}>
                {children}
            </TimerContext.Provider>
    )
}

export default ContextProvider
