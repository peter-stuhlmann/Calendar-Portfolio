import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit amet',
    slug: 'lorem-ipsum',
    shortDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    orientation: 'landscape',
    adultContent: false,
    placeholder:
      '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACAhITMkM1EwMFFCLy8vQiccHBwcJyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAALCAAKAA4BAREA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAA/AK4D/9k=',
    published: '2024-01-01 00:00:00',
    year: 2024,
    note: 'Consetetur',
    variants: [
      {
        isbn: '0123456789001',
        format: 'a5',
        price: 10.99,
        amazon: 'https://www.amazon.de',
        thalia: 'https://www.thalia.de/',
      },
      {
        isbn: '0123456789002',
        format: 'a4',
        price: 20.99,
        amazon: 'https://www.amazon.de',
        thalia: 'https://www.thalia.de/',
      },
      {
        isbn: '0123456789003',
        format: 'a3',
        price: 30.99,
        amazon: 'https://www.amazon.de',
        thalia: 'https://www.thalia.de/',
      },
      {
        isbn: '0123456789004',
        format: 'a2',
        price: 40.99,
        amazon: 'https://www.amazon.de',
        thalia: 'https://www.thalia.de/',
      },
      {
        isbn: '0123456789005',
        format: 'a2p',
        price: 50.99,
        amazon: 'https://www.amazon.de',
        thalia: 'https://www.thalia.de/',
      },
    ],
  },
];

export default products;
