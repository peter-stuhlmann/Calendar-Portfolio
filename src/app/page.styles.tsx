import styled from 'styled-components';

export const Container = styled.main`
  padding: 60px 20px 20px 20px;
  box-sizing: border-box;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

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
`;

export const ShortDescription = styled.h2`
  font-weight: bold;
  margin-bottom: 50px;
  font-size: 1em;

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
