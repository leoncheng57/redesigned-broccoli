import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Top from "./Top";
import Menu from "./Menu";

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
            />
            <Menu 
                theme={props.theme}
                menuIsOpen={menuIsOpen}
            />
        </ThemeProvider>
    )
}