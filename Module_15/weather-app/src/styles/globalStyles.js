import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        margin: center;
        font-family: ${({ theme }) => theme.fonts.main};
        background-color: #0f7fa;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center; 
    }
`;

export default GlobalStyles;