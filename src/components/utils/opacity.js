import { createContext, useState } from "react";

export const OpacityContext = createContext(null)

export default ({children}) => {
    const [opacity, setOpacity] = useState('opacity-0')

    const eleOpacity = {
        getOpacity: [opacity, setOpacity]
    }

    return <OpacityContext.Provider value={eleOpacity}>{children}</OpacityContext.Provider>
}