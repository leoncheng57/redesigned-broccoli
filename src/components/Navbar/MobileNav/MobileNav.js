import React from "react";
import styled, { ThemeProvider } from "styled-components";

import NavbarOnly from "./NavbarOnly";
import Menu from "./Menu";

export default (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <NavbarOnly theme={props.theme}/>
            <Menu theme={props.theme}/>
        </ThemeProvider>
    )
}