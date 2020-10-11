module.exports = function toReadable(number) {
    let result = '';
    if (number >= 100 && number < 1000) {
        let strNum = '' + number;
        result = `${result}${units(strNum[0])} hundred`;
        strNum = strNum.slice(1);
        if (strNum[0] === '0') {
            if (strNum[1] !== '0') {
                result = `${result} ${units(strNum[1])}`;
            }
        } else if (strNum[0] === '1') {
            result = `${result} ${dozers(strNum)}`;
        } else {
            result = `${result} ${dozers(strNum)} ${units(strNum[1])}`;
        }

    } else if (number >= 10 && number < 100) {
        let strNum = '' + number;
        if (strNum[0] === '1') {
            result = `${dozers(strNum)}`;
        } else {
            result = `${dozers(strNum)} ${units(strNum[1])}`;
        }
    } else if (number > 0 && number < 10) {
        let strNum = '' + number;
        result = `${units(strNum)}`;
    } else if (number === 0) {
        return 'zero';
    }

    return result.trim();
}

function units(str) {
    switch (str) {
        case '0':
            return '';
        case '1':
            return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';
        case '9':
            return 'nine';

    }
}

function dozers(str) {
    switch (str) {
        case '10':
            return 'ten';
        case '11':
            return 'eleven';
        case '12':
            return 'twelve';
        case '13':
            return 'thirteen';
        case '14':
            return 'fourteen';
        case '15':
            return 'fifteen';
        case '16':
            return 'sixteen';
        case '17':
            return 'seventeen';
        case '18':
            return 'eighteen';
        case '19':
            return 'nineteen';
    }

    switch (str[0]) {
        case '2':
            return 'twenty';
        case '3':
            return 'thirty';
        case '4':
            return 'forty';
        case '5':
            return 'fifty';
        case '6':
            return 'sixty';
        case '7':
            return 'seventy';
        case '8':
            return 'eighty';
        case '9':
            return 'ninety';
    }

}
