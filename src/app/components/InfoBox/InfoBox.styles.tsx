import styled from 'styled-components';

export const Container = styled.section`
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  color: #000;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  border-radius: 10px;
  margin-bottom: 100px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }

  img {
    border-radius: 10px;
    margin-right: 20px;

    @media (max-width: 768px) {
      width: 150px;
      height: auto;
      object-fit: cover;
    }

    @media (max-width: 480px) {
      width: 100%;
      height: 320px;
    }
  }

  & > div {
    height: 100%;
    width: 100%;

    @media (max-width: 480px) {
      margin-top: 30px;
    }

    & > div:first-child {
      font-weight: bold;
      font-size: 0.8em;
      text-transform: uppercase;
      margin-bottom: 15px;
    }
  }
`;

export const Contact = styled.div`
  margin-top: 50px;

  & > div {
    font-weight: bold;
    font-size: 0.8em;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      a {
        text-decoration: none;
        color: inherit;
        transition: 0.2s;

        &:hover {
          opacity: 0.8;
        }

        @media (max-width: 480px) {
          padding: 10px 0px;
          display: inline-block;
        }
      }
    }
  }
`;
