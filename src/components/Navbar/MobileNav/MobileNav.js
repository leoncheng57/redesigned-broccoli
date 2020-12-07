import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {MoonIcon} from "../SocialIcons";

const MobileNavContainer = styled.div`
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;

    #NameBox {
        background-color: ${props => props.theme.textColor};
        color: ${props => props.theme.backgroundPrimary};
        font-weight: 900;
        padding: 5px 10px;
        font: normal normal bold 23px/28px Chivo;
        text-align: center;
    }

    #Hamburger {
    }


`;

export default (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <MobileNavContainer>
                <div id="Hamburger">Ham</div>
                <div id="NameBox">
                    LEON CHENG
                </div>
                <MoonIcon fill={props.theme.highlight}/>
            </MobileNavContainer>
        </ThemeProvider>
    )
}