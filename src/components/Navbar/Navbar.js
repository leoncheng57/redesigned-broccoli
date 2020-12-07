import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {GithubIcon, LinkedInIcon, MailIcon, MoonIcon} from "./SocialIcons";
import TogglePill from "./TogglePill";
import MyEmail from "./MyEmail";

const NavbarContainer = styled.div`
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    @media ${props => props.theme.device.laptop} {
        background-color: red;
    }
`;

const LeftItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;

    #NameBox {
        background-color: ${props => props.theme.textColor};
        color: ${props => props.theme.backgroundPrimary};
        font-weight: 900;
        padding: 5px 10px;
        margin-right: 20px;
        font: normal normal bold 23px/28px Chivo;
        text-align: center;
    }

    a {
        margin: 0 7px;
    }
    a:hover {
        opacity: 0.6;
        cursor: pointer;
    }

`;



const RightItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;

    p {
        margin: 0 20px;
        font: normal normal normal 20px/29px Overpass;
    }
    p:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    svg {
        margin: 0 7px;
    }
`;



export default function(props) {
    return (
        <ThemeProvider theme={props.theme}>
            <NavbarContainer>
                <LeftItems>
                    <div id="NameBox">
                        LEON CHENG
                    </div>
                    <a href="#">
                        <GithubIcon fill={props.theme.textColor}/>
                    </a>
                    <a href="#">
                        <LinkedInIcon fill={props.theme.textColor}/>
                    </a>
                    <a href="#">
                        <MailIcon fill={props.theme.textColor}/>
                    </a>
                    <MyEmail/>
                </LeftItems>
                <RightItems>
                    <p>Top</p> 
                    <p>Education</p>
                    <p>Projects</p>
                    <p>Languages</p>
                    <p>Work</p>
                    <MoonIcon fill={props.theme.highlight}/>
                    <TogglePill/>
                </RightItems>
            </NavbarContainer>
        </ThemeProvider>
    )
}