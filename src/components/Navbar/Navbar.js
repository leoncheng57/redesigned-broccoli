import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {GithubIcon, LinkedInIcon, MailIcon, MoonIcon} from "./SocialIcons";

const NavbarContainer = styled.div`
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.textColor};
`;

const ToggleContainer = styled.div`
    background-color: ${props => props.theme.highlight};
    width: 39px;
    height: 24px;
    border-radius: 99px;
    display: flex;
    align-items: center;
`;

const ToggleCircle = styled.div`
    background-color: ${props => props.theme.backgroundPrimary};
    width: 15px;
    height: 15px;
    border-radius: 99px;
    margin: 0 5px;
`;

export default function(props) {
    return (
        <ThemeProvider theme={props.theme}>
            <NavbarContainer>
                <div>
                    LEON CHENG
                </div>
                <GithubIcon fill={props.theme.textColor}/>
                <LinkedInIcon fill={props.theme.textColor}/>
                <MailIcon fill={props.theme.textColor}/>
                leonc@mit.edu

                Top 
                Education
                Projects
                Languages
                Work

                <MoonIcon fill={props.theme.textColor}/>
                <ToggleContainer>
                    <ToggleCircle/>
                </ToggleContainer>
            </NavbarContainer>
        </ThemeProvider>
    )
}