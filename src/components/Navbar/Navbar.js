import React from "react";
import styled, { ThemeProvider } from "styled-components";
import LaptopNav from "./LaptopNav/LaptopNav";

const LaptopOnly = styled.div`
    display: none;

    @media ${props => props.theme.device.laptop} {
        display: block;
    }
`;

export default function(props) {
    return (
        <ThemeProvider theme={props.theme}>
            <LaptopOnly>
                <LaptopNav theme={props.theme}/>
            </LaptopOnly>
            <div>Mobile Nav</div>
            <div>Mobile Menu</div>
        </ThemeProvider>
    )
}