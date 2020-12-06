import React from "react";
import Navbar from "./Navbar";

import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import {lightTheme, darkTheme} from "../themes/colors";

const MyButton = styled.button`
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.textColor};
`;

export default function(){
    return (
        <div>
            <Navbar/>
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