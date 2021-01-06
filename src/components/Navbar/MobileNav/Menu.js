import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GithubIcon, LinkedInIcon, MailIcon } from "../socialicons";

const MenuContainer = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;

    display: ${props => props.menuIsOpen ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.textColor};
    border: none;
    margin: 0;

    .IconsAndEmail {
        margin: 20px 0;
        padding: 30px 50px;
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 1px solid ${props => props.theme.textColor};
        border-bottom: 1px solid ${props => props.theme.textColor};

        .IconsContainer {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 140px;
        }

        .EmailContainer {
            font: normal normal normal 16px/23px Overpass;
            margin: 0;
            padding-top: 20px; 
            color: ${props => props.theme.textColor};
        }
    }

    .LinksContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        font: normal normal normal 24px/28px Overpass;

        a {
            padding: 20px 0;
            color: inherit;
            text-decoration: none;
        }
    }
`;


export const Menu =  (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <MenuContainer menuIsOpen={props.menuIsOpen}>                    
                <div className="IconsAndEmail">
                    <div className="IconsContainer"> 
                        <GithubIcon fill={props.theme.textColor}/>
                        <LinkedInIcon fill={props.theme.textColor}/>
                        <MailIcon fill={props.theme.textColor}/>
                    </div>
                    <p className="EmailContainer">leonc@mit.edu</p>
                </div>

                <div className="LinksContainer">
                    <a href="#">Top</a>
                    <a href="#">Education</a>
                    <a href="#">Projects</a>
                    <a href="#">Languages</a>
                    <a href="#">Work</a>
                </div>
            </MenuContainer>
        </ThemeProvider>
    )
}