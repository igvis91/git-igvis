import isValid from './isValidName.js';
import { GREETING } from './constants/GREETING.js';

export function sayHelloToUser(name) {
    if (!isValid(name)) {
        return 'Invalid name';
    }
    return `${GREETING}, ${name}!`;
}

export { isValid };
export { formatPrices } from './formatPrices.js';
export { CURRENCY_SYMBOLS } from './constants/CURRENCY_SYMBOLS.js';
export { formatWithCurrency } from './formatWithCurrency.js';
export { Task } from './user-data/Task.js';
export { User } from './user-data/User.js';
export { GREETING };

import isValid from './isValidName.js';
import { GREETING } from './constants/GREETING.js';

export function sayHelloToUser(name) {
    if (!isValid(name)) {
        return 'Invalid name';
    }
    return `${GREETING}, ${name}!`;
}

export { isValid };
export { formatPrices } from './formatPrices.js';
export { CURRENCY_SYMBOLS } from './constants/CURRENCY_SYMBOLS.js';
export { formatWithCurrency } from './formatWithCurrency.js';
export { Task } from './user-data/Task.js';
export { User } from './user-data/User.js';
export { GREETING };

