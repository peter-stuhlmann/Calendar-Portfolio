import styled from 'styled-components';

export const SliderContainer = styled.div`
  .slick-slider {
    max-width: 640px;
    margin: 0 20px;

    @media (max-width: 480px) {
      margin: 0;
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
      @media (max-width: 480px) {
        left: 10px;
      }
    }
    .slick-next {
      @media (max-width: 480px) {
        right: 10px;
      }
    }

    .slick-dots {
      margin-left: -5px;

      li {
        width: 15px;

        @media (max-width: 480px) {
          width: 9px;
        }

        @media (max-width: 330px) {
          width: 5px;
        }

        button {
          width: 40px;
        }
      }
    }

    .slick-slide {
      div {
        outline: none;
      }

      .slide-subtitle {
        font-size: 0.8em;
        margin-top: 5px;
      }

      img {
        object-fit: contain;
        width: 100%;
        height: auto;
      }
    }
  }
`;
