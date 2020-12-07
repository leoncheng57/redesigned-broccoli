import React from "react";
import styled, { ThemeProvider } from "styled-components";
import LaptopNav from "./LaptopNav/LaptopNav";
import MobileNav from "./MobileNav/MobileNav";

const MobileOnly = styled.div`
    display: block;
    @media ${props => props.theme.device.laptop} {
        display: none;
    }
`;

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
            <MobileOnly>
                <MobileNav theme={props.theme}/>
            </MobileOnly>
        </ThemeProvider>
    )
}