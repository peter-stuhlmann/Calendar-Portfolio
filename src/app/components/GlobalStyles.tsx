'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: #fffdf5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    overflow-x: hidden;
    font-family: var(--primary-font), sans-serif;
    font-size: 16px;

    @media print {
      background-color: transparent;
    }

    & > div {
      overflow-x: hidden;
      flex: 1;
    }
  }
`;

export default GlobalStyles;
