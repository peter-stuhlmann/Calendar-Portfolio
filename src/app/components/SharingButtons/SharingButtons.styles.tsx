import styled from 'styled-components';

export const Container = styled.aside`
  margin-bottom: 100px;

  @media print {
    display: none;
  }

  div {
    font-weight: bold;
    font-size: 0.8em;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  ul {
    padding: 0;
    margin: 0 auto;
    list-style-type: none;
    max-width: 600px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    li {
      margin: 5px 10px;

      @media (max-width: 330px) {
        margin: 5px;
      }

      a,
      button {
        text-decoration: none;
        background-color: #fff;
        color: inherit;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
        transition: 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 40px;
        height: 40px;
        font-size: inherit;

        &:hover {
          opacity: 0.8;
        }

        svg {
          height: 20px;
        }

        span {
          margin-left: 5px;
        }
      }
    }
  }
`;
