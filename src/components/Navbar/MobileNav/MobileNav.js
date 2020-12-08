import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import NavbarOnly from "./NavbarOnly";
import Menu from "./Menu";

const NavbarOnlyWrapper = styled.div`
    opacity: ${props => props.showMenu ? "0" : "1"};
    transition: opacity 0.7s;
`;

const MenuWrapper = styled.div`
    /* opacity: ${props => props.showMenu ? "1" : "0"}; */
    opacity: 1;
    transition: opacity 0.7s;
`;


export default (props) => {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        setShowMenu(true);
    }

    const closeMenu = () => {
        setShowMenu(false);
    }

    return (
        <ThemeProvider theme={props.theme}>
            <NavbarOnlyWrapper showMenu={showMenu}>
                <NavbarOnly 
                    theme={props.theme}
                    openMenu={openMenu}
                />
            </NavbarOnlyWrapper>
            <MenuWrapper showMenu={showMenu}>
                <Menu 
                    theme={props.theme}
                    closeMenu={closeMenu}    
                />
            </MenuWrapper>
        </ThemeProvider>
    )
}