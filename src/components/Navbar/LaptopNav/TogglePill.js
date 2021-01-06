import React from "react";
import styled, { ThemeProvider } from "styled-components";

const ToggleContainer = styled.div`
    background-color: ${props => props.theme.highlight};
    width: 39px;
    height: 24px;
    border-radius: 99px;
    display: flex;
    align-items: center;
    margin: 0 5px;
    position: relative;
`;

const Circle = styled.div`
    background-color: ${props => props.theme.backgroundPrimary};
    width: 15px;
    height: 15px;
    border-radius: 99px;
    position: absolute;
    left: ${props => props.theme.themeName === "dark" ? `5px` : `19px`};
`;

export const TogglePill = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <ToggleContainer onClick={() => props.toggleTheme()}>
                <Circle/>
            </ToggleContainer>
        </ThemeProvider>
    )
}