'use client';

import styled from 'styled-components';

export const Container = styled.main<{ $textAlign?: string }>`
  & > div {
    padding: 60px 20px 20px 20px;
    box-sizing: border-box;
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    text-align: ${(p) => (p.$textAlign ? p.$textAlign : 'center')};

    @media (max-width: 480px) {
      padding: 30px 10px;
    }

    @media print {
      padding: 0;
    }

    & > div:nth-child(3) {
      display: inline-block;
      max-width: 100%;
    }

    h2 {
      margin: 60px 0 40px 0;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: -30px;
        width: calc(100% + 30px);
        height: 4px;
        background-color: rgb(250, 180, 57);
      }
    }
  }
`;

export const ShortDescription = styled.h2`
  font-weight: bold;
  margin-bottom: 50px;
  font-size: 1em;

  &::after {
    display: none;
  }

  a {
    color: inherit;
  }
`;

export const Description = styled.div`
  margin: 100px 0;

  h3 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8em;
    margin-bottom: 15px;
  }
`;

export const Heading = styled.h1<{ $marginBottom?: number }>`
  ${(p) => p.$marginBottom && `margin-bottom: ${p.$marginBottom}rem;`}

  @media (max-width: 480px) {
    font-size: 1.7em;
    ${(p) => p.$marginBottom && `margin-bottom: ${p.$marginBottom * 0.6}rem;`}
  }
`;
