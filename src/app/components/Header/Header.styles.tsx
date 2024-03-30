import styled from 'styled-components';

export const Container = styled.header`
  background-color: rgb(255, 255, 255);
  color: rgb(29, 29, 27);
  height: 100px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    height: 60px;
    padding: 0 10px;
  }

  @media print {
    display: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    text-align: center;

    svg {
      width: 335px;

      @media (max-width: 480px) {
        width: 200px;
      }

      .fill {
        fill: rgb(250, 180, 57);
      }
      .outline {
        fill: rgb(29, 29, 27);
      }

      /* g {
        transform: translate(-5px, -50px);

        .white {
          fill: rgb(255, 255, 255);
        }
        .white-shade {
          fill: rgb(224, 224, 224);
        }
        .red {
          fill: rgb(255, 0, 0);
        }
        .red-shade {
          fill: rgb(155, 10, 9);
        }
      } */
    }
  }
`;
