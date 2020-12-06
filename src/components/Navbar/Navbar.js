import React from "react";

import styled, { ThemeProvider } from "styled-components";

import {GithubIcon, LinkedInIcon, MailIcon} from "./SocialIcons";

const NavbarContainer = styled.div``;

export default function(props) {
    return (
        <ThemeProvider theme={props.theme}>
            <NavbarContainer>
                <div>
                    LEON CHENG
                </div>
                <GithubIcon fill="orange"/>
                <LinkedInIcon fill="orange"/>
                <MailIcon fill="orange"/>
                leonc@mit.edu
            </NavbarContainer>

        </ThemeProvider>
    )
}