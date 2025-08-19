// Modules for sayHelloToUser
import isValid from './isValidName.js';
import { GREETING } from './constants/GREETING.js';

// Modules for formatting prices
import { CURRENCY_SYMBOLS } from './constants/CURRENCY_SYMBOLS.js';
import { formatWithCurrency } from './formatWithCurrency.js';
import { formatPrices } from './formatPrices.js';

// Classes
import { Task } from './user-data/Task.js';
import { User } from './user-data/User.js';

function sayHelloToUser(name) {
    if (!isValid(name)) {
        return 'Invalid name';
    }

    return `${GREETING}, ${name}!`;
}

export { sayHelloToUser, formatPrices, isValid, GREETING, CURRENCY_SYMBOLS, formatWithCurrency, Task, User };

export default {
    isValid,
    sayHelloToUser,
    GREETING,
    CURRENCY_SYMBOLS,
    formatWithCurrency,
    formatPrices,
    Task,
    User,
};

