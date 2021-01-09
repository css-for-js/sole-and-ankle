/**
 * Several little utilities for this project.
 *
 * NOTE: These are NOT generic, and should not be copied
 * to other projects. They're quick imperfect implementations
 * for the known, fixed data we work with here.
 */
import differenceInDays from 'date-fns/differenceInDays';

export function formatPrice(price) {
  return `$${price / 100}`;
}

export function pluralize(string, num) {
  return num === 1 ? `1 ${string}` : `${num} ${string}s`;
}

export function isNewShoe(releaseDate) {
  return differenceInDays(new Date(), releaseDate) < 30;
}
