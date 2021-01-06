import React from "react";
import styled, { ThemeProvider } from "styled-components";
import LaptopNav from "./laptopnav/_laptopnav";
import MobileNav from "./mobilenav/_mobilenav";

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

export const Navbar = (props) => {
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