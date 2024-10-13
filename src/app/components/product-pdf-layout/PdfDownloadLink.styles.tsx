'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-bottom: 100px;

  button {
    height: 40px;
    font-size: 16px;
    border: 1px solid #000;
    border-radius: 20px;
    padding: 0 20px;
    background: none;
    cursor: pointer;
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #000;
    text-decoration: none;
    border: 1px solid #000;
    padding: 10px 25px;
    height: 30px;
    border-radius: 30px;

    svg {
      height: 20px;
      fill: #000;
    }
  }
`;
