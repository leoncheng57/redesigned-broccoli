import React, {useState} from "react";
import styled, { ThemeProvider } from "styled-components";

const MyEmailContainer = styled.div`
    position: relative;
    display: block;

    p {
        font: normal normal normal 16px/23px Overpass;
        cursor: pointer;
    }
    p:hover {
        color: ${props => props.theme.highlight}
    }

    #TooltipText {
        background-color: ${props => props.theme.backgroundSecondary};
        color: ${props => props.theme.textColor};
        font: normal normal normal 14px/20px Overpass;
        text-align: center;
        border-radius: 6px;
        padding: 5px 10px;
        z-index: 1;
        
        position: absolute;
        top: 80%;
        left: 10px;
        right: 10px;
        margin-left: auto;
        margin-right: auto;
        
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s;
    }

    /* The triangle arrow for the tooltip */
    #TooltipText::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -3px;  
        border-width: 6px;
        border-style: solid;
        border-color: transparent transparent ${props => props.theme.backgroundSecondary} transparent;
    }

    &:hover #TooltipText {
        visibility: visible;
        opacity: 1;
    }
`;


export default function(props) {
    const [tooltipText, setTooltipText] = useState("Copy to clipboard");

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
        setTooltipText("Copied!");
    }

    const handleMouseOut = () => {
        setTooltipText("Copy to clipboard");
    }

    return (
        <MyEmailContainer>
            <p onClick={clickToCopy} onMouseOut={handleMouseOut}>
                {myEmail}
            </p>
            <span id="TooltipText">{tooltipText}</span>
        </MyEmailContainer>    
    )
}