import React from 'react';
import GlobalStyle from '../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/ThemeValues';

function ThemeWrapper({children}) {
    return (
        <ThemeProvider theme={theme}>
           <GlobalStyle />
           {children} 
        </ThemeProvider>
    )
}

export default ThemeWrapper;
