'use client';

import styled from 'styled-components';

export const HeroSliderContainer = styled.section`
  .slick-slider {
    width: 100%;
    height: 100%;

    & > button {
      display: none !important;
    }

    .slick-slide {
      box-sizing: border-box;
      width: 100%;
      aspect-ratio: 4 / 1;

      @media (max-width: 1280px) {
        aspect-ratio: 3 / 1;
      }

      @media (max-width: 768px) {
        aspect-ratio: 2 / 1;
      }

      & > div {
        outline: none;
        position: relative;
        height: 100%;

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;

          &:first-of-type {
            @media (max-width: 768px) {
              display: none !important;
            }
          }

          &:last-of-type {
            @media (min-width: 769px) {
              display: none !important;
            }
          }
        }

        & > div > div {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            200deg,
            transparent 0%,
            transparent 30%,
            rgba(29, 29, 27, 0.8) 60%,
            rgb(29, 29, 27) 100%
          );
          display: flex;

          & > div {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            flex: 0 0 100%;
            max-width: 1300px;
            margin: 0 auto 20px auto;
            padding: 20px;
            box-sizing: border-box;

            @media (max-width: 1280px) {
              margin: 0 auto 10px auto;
            }

            @media (max-width: 768px) {
              margin: 0 auto;
            }

            @media (max-width: 480px) {
              padding: 10px;
            }

            & > div {
              width: 60vw;
              max-width: 800px;
              font-size: 40px;
              color: rgb(255, 255, 255);
              text-shadow: 2px 2px 0px rgb(0, 0, 0), 2px -2px 0px rgba(0, 0, 0),
                -2px 2px 0px rgb(0, 0, 0), -2px -2px 0px rgb(0, 0, 0),
                2px 0px 0px rgb(0, 0, 0), 0px 2px 0px rgb(0, 0, 0),
                -2px 0px 0px rgb(0, 0, 0), 0px -2px 0px rgb(0, 0, 0),
                0px 0px 16px rgb(0, 0, 0);
              margin-bottom: 20px;
              text-overflow: ellipsis;
              overflow: hidden;
              -webkit-line-clamp: 3;
              display: -webkit-box;
              -webkit-box-orient: vertical;

              @media (max-width: 768px) {
                font-size: 30px;
                margin-bottom: 15px;
              }

              @media (max-width: 480px) {
                font-size: 20px;
                margin-bottom: 10px;
              }
            }

            & > a {
              background-color: rgb(250, 180, 57);
              color: rgb(29, 29, 27);
              font-weight: bold;
              padding: 10px 25px;
              text-decoration: none;
              align-self: flex-start;
              border-radius: 8px;
              font-size: 20px;
              transition: 0.2s;

              @media (max-width: 1280px) {
                bottom: 10px;
              }

              @media (max-width: 768px) {
                bottom: 0;
              }

              @media (max-width: 480px) {
                padding: 7px 15px;
                font-size: 16px;
              }

              &:hover {
                background-color: rgb(29, 29, 27);
                color: rgb(250, 180, 57);
              }
            }
          }
        }
      }
    }
  }
`;
