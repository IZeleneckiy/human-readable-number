module.exports = function toReadable (number) {
    const NUMBERS_1_19 = {
        0 : '',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
        10 : 'ten',
        11 : 'eleven',
        12 : 'twelve',
        13 : 'thirteen',
        14 : 'fourteen',
        15 : 'fifteen',
        16 : 'sixteen',
        17 : 'seventeen',
        18 : 'eighteen',
        19 : 'nineteen',
    }
    const NUMBERS_PREF = {
        2 : 'twen',
        3 : 'thir',
        4 : 'for',
        5 : 'fif',
        6 : 'six',
        7 : 'seven',
        8 : 'eigh',
        9 : 'nine',
    }


    if (number < 1) {
        return 'zero';
    } else if (number < 20) {
        return NUMBERS_1_19[number];
    } else if (number < 100) {
        return (NUMBERS_PREF[Math.trunc(number / 10)] + 'ty ' + NUMBERS_1_19[number % 10]).trim();
    } else {
        return (NUMBERS_1_19[Math.trunc(number / 100)] + ' hundred ' + (number % 100 > 0 ? toReadable(number % 100) : '')).trim();
    }
}
