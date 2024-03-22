import { InfoBoxProps } from '../types';

const infoBox: InfoBoxProps = {
  ariaLabel: 'Lorem ipsum dolor sit amet',
  image: {
    src: '/img/hello-world.svg',
    alt: 'Hello World',
    width: 779 / 4,
    height: 1024 / 4,
    placeholder:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAMAAADOvxanAAAACXBIWXMAACzPAAAszwF/850oAAAAM1BMVEXc3Nzc3Nzd3d3FxcXIyMjKysrLy8vNzc3Ozs7Pz8/Q0NDc3Nzd3d3g4ODh4eHi4uLj4+OLcKHAAAAAA3RSTlPl8vIgZsaaAAAAPklEQVQI12Ng4GaEAG4GBkZuGGAkks0nwMvHz88HZDPxcLJwcbJxcPCA2BzM7JwsrOw8TGA1fFA1pJqP5DYAoUwE9nLtf+IAAAAASUVORK5CYII=',
  },
  heading: 'Info',
  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  contact: {
    heading: 'Contact',
    links: [
      {
        title: 'https://example.com/1',
        href: 'https://example.com/1',
        label: 'Lorem ipsum dolor sit amet 1',
      },
      {
        title: 'https://example.com/2',
        href: 'https://example.com/2',
        label: 'Lorem ipsum dolor sit amet 2',
      },
      {
        title: 'https://example.com/3',
        href: 'https://example.com/3',
        label: 'Lorem ipsum dolor sit amet 3',
      },
    ],
  },
};

export default infoBox;
