import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import {lightTheme, darkTheme} from "../themes/colors";

const MyButton = styled.button`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
`;

const App = () => {
    return (
        <div>
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

export default App;