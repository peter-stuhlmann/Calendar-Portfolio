import styled from 'styled-components';

export const Carousel = styled.div`
  margin-bottom: 100px;

  h3 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8em;
    margin-bottom: 15px;
  }

  .slick-slider {
    max-width: 100%;

    .slick-slide {
      padding: 0 10px;
      box-sizing: border-box;
      width: 320px;
      aspect-ratio: 320 / 212;

      @media (max-width: 480px) {
        padding: 0 5px;
      }

      div {
        outline: none;
      }

      img {
        object-fit: contain;
        width: 100%;
        height: auto;
      }
    }

    .slick-prev,
    .slick-next {
      z-index: 1;

      &::before {
        color: #000;
      }

      @media print {
        display: none !important;
      }
    }
    .slick-prev {
      @media (max-width: 1080px) {
        left: -15px;
      }

      @media (max-width: 480px) {
        left: 10px;
      }
    }
    .slick-next {
      @media (max-width: 1080px) {
        right: -15px;
      }

      @media (max-width: 480px) {
        right: 10px;
      }
    }
  }
`;
