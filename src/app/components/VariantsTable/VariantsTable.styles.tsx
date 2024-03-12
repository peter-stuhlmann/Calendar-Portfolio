import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 100px;

  p {
    opacity: 0.8;
    font-size: 0.8em;

    @media print {
      text-align: left;
    }
  }

  ul {
    padding: 0;
    margin: 0 auto;
    list-style-type: none;

    li {
      display: flex;
      border-bottom: 1px solid #dedede;
      padding: 10px 10px 20px 10px;
      margin: 10px 0;
      color: #000;

      &:first-child {
        font-weight: bold;
        font-size: 0.8em;
        text-transform: uppercase;

        @media (max-width: 768px) {
          display: none;
        }
      }

      &:last-child {
        border-bottom: none;
      }

      @media (max-width: 768px) {
        flex-flow: row wrap;
      }

      & > div {
        text-align: left;

        &:nth-child(1) {
          flex: 0 0 25%;
        }
        &:nth-child(2) {
          flex: 0 0 24%;
        }
        &:nth-child(3) {
          flex: 0 0 31%;
        }
        &:nth-child(4) {
          flex: 0 0 20%;
        }

        @media (max-width: 768px) {
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            flex: 0 0 100%;
          }
        }

        & > span {
          display: none;

          @media (max-width: 768px) {
            font-weight: bold;
            display: inline-block;
            margin-right: 5px;
            margin-bottom: 10px;
            font-weight: bold;
            font-size: 0.8em;
            text-transform: uppercase;
          }
        }

        & > div {
          text-align: left;
          margin-bottom: 8px;

          &:last-child {
            margin-bottom: 0;
          }

          a {
            text-decoration: none;
            color: inherit;
            transition: 0.2s;
            white-space: nowrap;

            &:hover {
              opacity: 0.8;
            }

            svg {
              opacity: 0.5;
              height: 1em;
              transform: translateY(-3px);
            }

            span {
              position: absolute;
              overflow: hidden;
              clip: rect(0 0 0 0);
              width: 1px;
              height: 1px;
              margin: -1px;
              padding: 0;
            }
          }
        }
      }
    }
  }
`;
