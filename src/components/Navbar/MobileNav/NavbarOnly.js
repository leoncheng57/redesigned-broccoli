import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {MoonIcon, CloseIcon} from "../SocialIcons";

const NavbarOnlyContainer = styled.div`
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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
        .patty {
            width: 35px;
            height: 5px;
            background-color: white;
            margin: 7px 0;
        }
    }
    #Hamburger:active {
        opacity: 0.4;
    }
`;

export default (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <NavbarOnlyContainer>
                <div id="Hamburger" onClick={() => {props.openMenu()}}>
                    <div className="patty"></div>                    
                    <div className="patty"></div>                    
                    <div className="patty"></div>                    
                </div>
                <CloseIcon fill={props.theme.textColor}/>
                <div id="NameBox">
                    LEON CHENG
                </div>
                <MoonIcon fill={props.theme.highlight}/>
            </NavbarOnlyContainer>
        </ThemeProvider>
    )
}