import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {GithubIcon, LinkedInIcon, MailIcon, MoonIcon} from "../socialicons";
import {TogglePill} from "./togglepill";
import {MyEmail} from "./myemail";

const LaptopNavContainer = styled.div`
    width: 100%;
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
    margin: 0 20px;

    #NameBox {
        background-color: ${props => props.theme.textColor};
        color: ${props => props.theme.backgroundPrimary};
        font-weight: 900;
        padding: 5px 10px;
        margin-right: 20px;
        font: normal normal bold 20px/28px Chivo;
        text-align: center;
    }

    a {
        margin: 0 7px;
        width: 30px;
        height: auto;
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

    a {
        text-decoration: none;
        color: inherit;
    }
    p {
        margin: 0 15px;
        font: normal normal normal 16px/29px Overpass;
    }
    p:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    svg {
        margin: 0 7px;
    }
`;


export default (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <LaptopNavContainer>
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
                    <a href="#">
                        <p>Top</p> 
                    </a>
                    <a href="#">
                        <p>Education</p>
                    </a>
                    <a href="#">
                        <p>Projects</p>
                    </a>
                    <a href="#">
                        <p>Languages</p>
                    </a>
                    <a href="#">
                        <p>Work</p>
                    </a>
                    <MoonIcon fill={props.theme.highlight}/>
                    <TogglePill/>
                </RightItems>
            </LaptopNavContainer>
        </ThemeProvider>
    )
}