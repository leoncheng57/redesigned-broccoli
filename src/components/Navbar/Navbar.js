import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {GithubIcon, LinkedInIcon, MailIcon, MoonIcon} from "./SocialIcons";
import TogglePill from "./TogglePill";

const NavbarContainer = styled.div`
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.textColor};
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

                <MoonIcon fill={props.theme.highlight}/>
                <TogglePill/>
            </NavbarContainer>
        </ThemeProvider>
    )
}