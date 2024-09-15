import Lang, {Dir} from "@/types/lang";
import React, { createContext, useEffect, useState } from "react";



type LangProviderProps = {
    children: React.ReactNode,
    defaultLang?: Lang,
}


type LangProvideState = {
    lang: Lang,
    setLang: (lang: Lang) => void,
    direction: Dir,
}

const initialState : LangProvideState = {
    lang: 'en',
    setLang: () => null,
    direction: 'ltr',
}

export const LangProviderContext = createContext<LangProvideState>(initialState);

const LangProvider = ({children, defaultLang = 'en'} : LangProviderProps) => {

    const storageKey = "lang"

    const [lang, setLang] = useState<Lang>(() => {
        return (localStorage.getItem(storageKey) as Lang) || defaultLang;
    });

    const direction = lang === 'ar' ? 'rtl' : 'ltr';

    useEffect(() => {
        const root = window.document.documentElement

        root.setAttribute("dir", direction);


    }, [direction])

    const value : LangProvideState = {
        lang,
        setLang: (lang: Lang) => {
            localStorage.setItem(storageKey, lang);
            setLang(lang);
        },
        direction
    }

    return (
        <LangProviderContext.Provider value={value}>
            {children}
        </LangProviderContext.Provider>
    )
}

export default LangProvider;
