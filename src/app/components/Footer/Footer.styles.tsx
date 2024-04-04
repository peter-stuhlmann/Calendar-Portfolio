import styled from 'styled-components';

export const Container = styled.footer`
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1080px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

  @media print {
    display: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: inline-block;

    @media (max-width: 1080px) {
      padding: 8px 20px;
    }

    & > svg {
      height: 16px;
      margin: 0 2px -2px 2px;
      fill: rgb(250, 180, 57);
    }
  }

  ul {
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media (max-width: 1080px) {
      flex-direction: column;
      align-items: center;
      gap: 5px;
      margin-bottom: 20px;
    }

    li {
      transition: 0.2s;

      &:hover {
        opacity: 0.8;
      }

      span {
        display: inline-block;
        cursor: pointer;

        @media (max-width: 1080px) {
          padding: 8px 20px;
        }
      }
    }
  }
`;
