import React from "react";
import styled, { ThemeProvider } from "styled-components";

const MenuContainer = styled.div`
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.textColor};
`;


export default (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <MenuContainer>
                <div onClick={() => {props.closeMenu()}}> X </div>
                <div>LEON CHENG</div>
                <div>MoonIcon</div>
                <div> --- </div>
                <div> Social Icons </div>
                <div> --- </div>
                <div>
                    <p>Top</p>
                    <p>Education</p>
                    <p>Projects</p>
                    <p>Languages</p>
                    <p>Work</p>
                </div>
            </MenuContainer>
        </ThemeProvider>
    )
}