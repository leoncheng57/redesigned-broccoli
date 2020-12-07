import React from "react";
import styled, { ThemeProvider } from "styled-components";
import LaptopNav from "./LaptopNav/LaptopNav";

export default function(props) {
    return (
        <ThemeProvider theme={props.theme}>
            <LaptopNav theme={props.theme}/>
            <div>Mobile Nav</div>
            <div>Mobile Menu</div>
        </ThemeProvider>
    )
}