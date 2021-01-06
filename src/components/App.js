import React, {useState} from "react";
import {Navbar} from "./navbar/_navbar";

import "../index.css";

import styled, { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from "../themes/colors";

const MyButton = styled.button`
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.textColor};
`;

export default function(){
    const [currentTheme, setCurrentTheme] = useState(darkTheme);

    const toggleTheme = () => {
        currentTheme === darkTheme ? setCurrentTheme(lightTheme) : setCurrentTheme(darkTheme); 
    }

    return (
        <div>
            <Navbar theme={currentTheme} toggleTheme={toggleTheme}/>

            <hr/>
            <hr/>
            <button onClick={()=> {
                currentTheme === darkTheme ? setCurrentTheme(lightTheme) : setCurrentTheme(darkTheme); 
            }}>
                Click
            </button>
            <hr/>
            <hr/>
            <hr/>
        </div>
    )
}