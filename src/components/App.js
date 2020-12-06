import React, {useState} from "react";
import Navbar from "./Navbar";

import "../index.css";

import styled, { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from "../themes/colors";

const MyButton = styled.button`
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.textColor};
`;

export default function(){
    const [currentTheme, setCurrentTheme] = useState(darkTheme)

    return (
        <div>
            <Navbar theme={currentTheme}/>
            <hr/>
            <ThemeProvider theme={darkTheme}>
                <MyButton>
                    Something something what the 
                </MyButton>
            </ThemeProvider>
            <br/>
            <ThemeProvider theme={lightTheme}>
                <MyButton>
                    Another one
                </MyButton>
            </ThemeProvider>
        </div>
    )
}