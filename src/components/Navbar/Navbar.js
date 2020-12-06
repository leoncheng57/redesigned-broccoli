import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {GithubIcon, LinkedInIcon, MailIcon, MoonIcon} from "./SocialIcons";
import TogglePill from "./TogglePill";

const NavbarContainer = styled.div`
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
`;

const NameBox = styled.div`
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.backgroundPrimary};
    font-weight: 900;
    padding: 5px;
`;

export default function(props) {
    return (
        <ThemeProvider theme={props.theme}>
            <NavbarContainer>
                <NameBox>
                    LEON CHENG
                </NameBox>
                <GithubIcon fill={props.theme.textColor}/>
                <LinkedInIcon fill={props.theme.textColor}/>
                <MailIcon fill={props.theme.textColor}/>
                leonc@mit.edu

                Top 
                Education
                Projects
                Languages
                Work

                <MoonIcon fill={props.theme.highlight}/>
                <TogglePill/>
            </NavbarContainer>
        </ThemeProvider>
    )
}