require('colors');

import NP from 'number-precision';

function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, pur) => NP.plus(acc, pur), 0);

    total = NP.times(total, discount);
    return total;
}

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

console.log("Общая стоимость покупок: " + total + " рублей")