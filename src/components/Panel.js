import React, { useContext } from 'react'
import {ThemeContext} from '../App.js'
export const Panel = ({title,children}) => {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
  return (
    <section className={className}>
        <h1>{title}</h1>
        {children}
    </section>
  )
}
