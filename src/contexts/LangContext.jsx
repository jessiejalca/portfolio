import { createContext, useContext, useState } from "react"

const LangContext = createContext()

export function LangProvider({ children }) {
    const [lang, setLang] = useState(localStorage.getItem("lang") || "en")
    const handleSetLang = (newLang) => {
        setLang(newLang)
        localStorage.setItem("lang", newLang)
    }

    return (
        <LangContext.Provider value={{ lang, setLang: handleSetLang }}>
            {children}
        </LangContext.Provider>
    )
}

export const useLang = () => useContext(LangContext)