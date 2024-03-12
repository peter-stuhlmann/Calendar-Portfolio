import Link from 'next/link';
import styled from 'styled-components';

export const GridContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 100px;
`;

export const GridItem = styled(Link)`
  flex: 0 0 calc(100% / 3 - 20px);
  margin-bottom: 30px;
  margin-right: 30px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  background-color: #fff;
  color: #000;

  &:nth-child(3n) {
    margin-right: 0;
  }

  @media (max-width: 1080px) {
    flex: 0 0 calc(100% / 2 - 15px);

    &:nth-child(3n) {
      margin-right: 30px;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(100% / 2 - 10px);
    margin-bottom: 20px;
    margin-right: 20px;

    &:nth-child(3n) {
      margin-right: 20px;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 480px) {
    flex: 0 0 calc(100% / 2 - 5px);
    margin-right: 10px;
    font-size: 0.9em;

    &:nth-child(3n) {
      margin-right: 10px;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 330px) {
    font-size: 0.8em;
  }

  & > div {
    &:nth-child(1) {
      position: relative;
      overflow: hidden;
      aspect-ratio: 460 / 322;

      &:hover img {
        scale: 1.02;

        @media (max-width: 1080px) {
          scale: none;
        }
      }

      img {
        transition: 0.2s;
        width: 100%;
        height: auto;
        margin-bottom: -4px;
      }

      div {
        position: absolute;
        background-color: #fff;
        color: #000;
        top: 10px;
        right: -50px;
        padding: 4px 60px;
        border-radius: 5px;
        transform: rotate(20deg);
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.8em;
        margin-bottom: 10px;
        width: 85px;
      }
    }

    &:nth-child(2) {
      padding: 15px;

      @media (max-width: 480px) {
        padding: 7px;
      }

      & > div {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
