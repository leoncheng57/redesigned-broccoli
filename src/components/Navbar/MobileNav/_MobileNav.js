import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import {Top} from "./top";
import {Menu} from "./menu";

export default (props) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const openMenu = () => {
        setMenuIsOpen(true);
    }

    const closeMenu = () => {
        setMenuIsOpen(false);
    }

    return (
        <ThemeProvider theme={props.theme}>
            <Top 
                theme={props.theme}
                menuIsOpen={menuIsOpen}
                openMenu={openMenu}
                closeMenu={closeMenu}   
                toggleTheme={props.toggleTheme}
            />
            <Menu 
                theme={props.theme}
                menuIsOpen={menuIsOpen}
            />
        </ThemeProvider>
    )
}