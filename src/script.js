// Modules for sayHelloToUser
import isValid from './isValidName.js';
import { GREETING } from './constants/GREETING.js';

// Modules for formatPrices
import { CURRENCY_SYMBOLS } from './constants/CURRENCY_SYMBOLS.js';
import { formatWithCurrency } from './formatWithCurrency.js';

function sayHelloToUser(name) {
    if (!isValid(name)) {
        return 'Invalid name';
    }

    return `${GREETING}, ${name}!`;
}

function formatPrices(prices, currency) {
    const currencySymbol = CURRENCY_SYMBOLS[currency] || '$';

    return prices.map((price) => {
        return formatWithCurrency(price, currencySymbol);
    });
}

export { sayHelloToUser, formatPrices };

