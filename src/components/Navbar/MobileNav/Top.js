import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {MoonIcon, CloseIcon} from "../SocialIcons";

const TopContainer = styled.div`
    display: flex;
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.textColor};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    height: 80px;
    border: none;
    margin: 0;

    #NameBox {
        background-color: ${props => props.theme.textColor};
        color: ${props => props.theme.backgroundPrimary};
        font-weight: 900;
        padding: 5px 10px;
        font: normal normal bold 23px/28px Chivo;
        text-align: center;
    }

    #Hamburger {
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        #Open {
            display: ${props => props.menuIsOpen ? "none" : "block"};
            /* opacity: ${props => props.menuIsOpen ? "0" : "1"};
            transition: opacity 0.7s; */

            .patty {
                width: 35px;
                height: 5px;
                background-color: white;
                margin: 7px 0;
            }
        }
        #Close {
            display: ${props => props.menuIsOpen ? "block" : "none"};
            /* opacity: ${props => props.menuIsOpen ? "1" : "0"};
            transition: opacity 0.7s; */
        }
    }
    #Hamburger:active {
        opacity: 0.4;
    }

    #MoonContainer {
        margin: 0 10px;
    }
`;

export default (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <TopContainer menuIsOpen={props.menuIsOpen}>
                <div id="Hamburger">
                    <div id="Open" onClick={() => {props.openMenu()}}>
                        <div className="patty"></div>                    
                        <div className="patty"></div>                    
                        <div className="patty"></div>                    
                    </div>

                    <div id="Close" onClick={() => props.closeMenu()}>
                        <CloseIcon fill={props.theme.textColor}/>
                    </div>
                </div>
                <div id="NameBox">
                    LEON CHENG
                </div>
                <div id="MoonContainer">
                    <MoonIcon fill={props.theme.highlight}/>
                </div>
            </TopContainer>
        </ThemeProvider>
    )
}