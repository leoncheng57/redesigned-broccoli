import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {GithubIcon, LinkedInIcon, MailIcon, MoonIcon} from "./SocialIcons";
import TogglePill from "./TogglePill";

const NavbarContainer = styled.div`
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const LeftItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    #NameBox {
        background-color: ${props => props.theme.textColor};
        color: ${props => props.theme.backgroundPrimary};
        font-weight: 900;
        padding: 5px 10px;
        margin: 0 20px;
        font: normal normal bold 23px/28px Chivo;
    }

    svg {
        margin: 0 7px;
    }
    svg:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    p {
        font: normal normal normal 16px/23px Overpass;
        cursor: pointer;
    }
`;



const RightItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;



export default function(props) {

    const myEmail = "leonc@mit.edu";

    // Set up an invisible input element so that Click to Copy can work
    const clickToCopy = () => {
        const body = document.getElementsByTagName('body')[0];
        const invisibleInput = document.createElement("input");
        invisibleInput.setAttribute('value', myEmail);
        body.appendChild(invisibleInput);
        invisibleInput.select();
        document.execCommand("copy");
        body.removeChild(invisibleInput);
    }


    return (
        <ThemeProvider theme={props.theme}>
            <NavbarContainer>
                <LeftItems>
                    <div id="NameBox">
                        LEON CHENG
                    </div>
                    <GithubIcon fill={props.theme.textColor}/>
                    <LinkedInIcon fill={props.theme.textColor}/>
                    <MailIcon fill={props.theme.textColor}/>
                    <p id="myEmail" onClick={clickToCopy}>
                        {myEmail}
                    </p>
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