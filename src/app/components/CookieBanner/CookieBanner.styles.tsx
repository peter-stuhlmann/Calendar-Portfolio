import styled from 'styled-components';

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Container = styled.aside`
  background-color: #fff;
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(calc(50% + 20px), -50%);
  padding: 20px;
  box-sizing: border-box;
  width: calc(100% - 40px);
  max-width: 550px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  margin: 20px;

  @media (max-width: 480px) {
    margin: 10px;
    width: calc(100% - 20px);
    transform: translate(calc(50% + 10px), -50%);
  }

  p {
    @media (max-width: 480px) {
      font-size: 0.9em;
    }

    @media (max-width: 330px) {
      font-size: 0.8em;
    }
  }

  div {
    display: flex;
    align-items: center;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }
`;

export const Heading = styled.span`
  font-weight: bold;
  text-align: left;
`;

export const Text = styled.p<{ $small?: boolean }>`
  ${(p) => p.$small && `font-size: 0.8em; margin: 10px 0 20px 0;`}

  @media (max-width: 480px) {
    ${(p) => p.$small && `margin: 10px 0 20px 0;`}
  }

  a {
    color: inherit;
  }
`;

export const Accept = styled.button`
  border-radius: 10px;
  border: none;
  background-color: #00d21c;
  color: #000;
  text-transform: uppercase;
  padding: 8px 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    margin: 10px;
  }
`;

export const Decline = styled.span`
  font-size: 0.8em;
  transition: 0.2s;
  opacity: 0.8;
  cursor: pointer;
  padding: 10px;
  text-align: center;
`;
