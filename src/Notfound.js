import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        background: red;
        color: white
    }
`

function Notfound() {
    return (
        <>
            <GlobalStyle />
            <h1>404_ERROR</h1>
        </>
    );
}

export default Notfound;