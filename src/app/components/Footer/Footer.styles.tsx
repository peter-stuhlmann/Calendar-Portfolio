import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #fff;
  color: #000;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
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

    @media (max-width: 480px) {
      padding: 8px 20px;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }

    li {
      margin-right: 20px;
      transition: 0.2s;

      &:last-child {
        margin-right: 0;
      }

      @media (max-width: 480px) {
        margin-right: 0;
      }

      span {
        display: inline-block;
        cursor: pointer;

        @media (max-width: 480px) {
          padding: 8px 20px;
        }
      }
    }
  }
`;
