/**
 * In a real app, this data would likely live in a database,
 * and be fetched from an API, either at runtime or at
 * compile-time.
 *
 * Keep in mind, this workshop is focused on CSS. In order
 * to make it easy to focus on the styling, we're cutting
 * some corners when it comes to our data management, and
 * our JavaScript in general. Please don't try to glean
 * any best-practices from stuff like this data file!
 */

const SHOES = [
  {
    slug: 'tech-challenge',
    name: 'NikeCourt Tech Challenge 20',
    imageSrc: '/assets/tech-challenge.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: '2021-03-01T09:30:00-0400',
    numOfColors: 2,
  },
  {
    slug: 'metcon-5',
    name: 'Nike Metcon 5 AMP',
    imageSrc: '/assets/metcon-5.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: '2021-02-27T09:30:00-0400',
    numOfColors: 1,
  },
  {
    slug: 'phantom',
    name: 'Nike Phantom Vision Elite Dynamic Fit FG',
    imageSrc: '/assets/phantom.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: '2021-02-21T09:30:00-0400',
    numOfColors: 4,
  },
  {
    slug: 'pegasus',
    name: 'Nike Air Zoom Pegasus 36 Trail',
    imageSrc: '/assets/pegasus.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: '2021-02-16T09:30:00-0400',
    numOfColors: 1,
  },
  {
    slug: 'joyride',
    name: 'Nike Joyride Dual Run',
    imageSrc: '/assets/joyride.jpg',
    price: 17000,
    salePrice: null,
    releaseDate: '2021-01-30T09:30:00-0400',
    numOfColors: 2,
  },
  {
    slug: 'legend-academy',
    name: 'Nike Tiempo Legend 8 Academy TF',
    imageSrc: '/assets/legend-academy.jpg',
    price: 16500,
    salePrice: 12500,
    releaseDate: '2021-01-24T09:30:00-0400',
    numOfColors: 8,
  },
  {
    slug: 'react-infinity',
    name: 'Nike React Infinity Pro',
    imageSrc: '/assets/react-infinity.jpg',
    price: 16000,
    salePrice: 14500,
    releaseDate: '2021-01-14T09:30:00-0400',
    numOfColors: 1,
  },
  {
    slug: 'phantom-flyknit',
    name: 'Nike React Phantom Run Flyknit 2',
    imageSrc: '/assets/phantom-flyknit.jpg',
    price: 18500,
    salePrice: 16000,
    releaseDate: '2021-01-02T09:30:00-0400',
    numOfColors: 4,
  },
  {
    slug: 'lebron',
    name: 'LeBron 17',
    imageSrc: '/assets/lebron.jpg',
    price: 26000,
    salePrice: null,
    releaseDate: '2020-12-25T09:30:00-0400',
    numOfColors: 1,
  },
];

export default SHOES;
