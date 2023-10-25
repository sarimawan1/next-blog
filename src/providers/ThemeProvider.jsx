"use client"

import {ThemeContext} from '@/context/themeContext'
import React, {useContext, useState} from 'react'


const ThemeProvider = ({children}) => {

    const {theme} = useContext(ThemeContext)
    const {mounted, setMounted} = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [setMounted]);

    if (mounted) {
        return <div className={theme}>{children}</div>
    }
    
};

export default ThemeProvider;