"use client"

import {ThemeContext} from '@/context/themeContext'
import React, {useContext, useState} from 'react'


const ThemeProvider = ({children}) => {

   // const {theme} = useContext(ThemeContext)

        return <div className={theme}>{children}</div>
    
};

export default ThemeProvider;