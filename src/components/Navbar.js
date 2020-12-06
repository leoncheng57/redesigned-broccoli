import React from "react";

import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import {lightTheme, darkTheme} from "../themes/colors";

import githubIcon from '../images/github-icon.svg';

const GithubIcon = ({fill}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="30.758" height="30" viewBox="0 0 30.758 30" fill={fill}><path class="a" d="M15.386,0a15.381,15.381,0,0,0-4.86,29.973c.769.14,1.011-.315,1.011-.723,0-.365.008-1.386,0-2.67-4.277.93-5.164-2.026-5.164-2.026A4.072,4.072,0,0,0,4.667,22.3c-1.4-.954.1-.935.1-.935a3.233,3.233,0,0,1,2.356,1.585A3.276,3.276,0,0,0,11.6,24.232a3.291,3.291,0,0,1,.978-2.056c-3.415-.388-7-1.707-7-7.6a5.943,5.943,0,0,1,1.582-4.126,5.521,5.521,0,0,1,.151-4.071S8.6,5.965,11.537,7.956a14.591,14.591,0,0,1,7.7,0c2.937-1.99,4.226-1.578,4.226-1.578a5.531,5.531,0,0,1,.153,4.071A5.941,5.941,0,0,1,25.2,14.575c0,5.909-3.6,7.209-7.022,7.588A3.637,3.637,0,0,1,19.229,25v4.257c0,.411.248.866,1.029.717A15.382,15.382,0,0,0,15.386,0Z" transform="translate(-0.008)"/></svg>
}

export default function() {
    return (
        <div>
            <div>
                LEON CHENG
            </div>
            <GithubIcon fill="blue"/>

        </div>
    )
}