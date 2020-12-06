import React from "react";
import styled, { ThemeProvider } from "styled-components";

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
        <ToggleContainer>
            <ToggleCircle/>
        </ToggleContainer>
    )
}