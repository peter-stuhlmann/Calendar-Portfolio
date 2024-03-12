import styled from 'styled-components';

export const Container = styled.header`
  background-color: #fff;
  color: #000;
  height: 100px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    height: 50px;
    padding: 10px;
  }

  @media print {
    display: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    text-align: center;
  }
`;
