import React from "react";

import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import {lightTheme, darkTheme} from "../themes/colors";

import githubLogo from '../images/github-icon.svg';

export default function() {
    return (
        <div>
            <div>
                LEON CHENG
            </div>
            <img src={githubLogo}/>

        </div>
    )
}