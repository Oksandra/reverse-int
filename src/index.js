module.exports = function reverse (n) {
    const positiveNumber = Math.abs(n);
    const doToString = String(positiveNumber);
    const amount = doToString.length;
    let result = '';
    let i = amount - 1;
    while (i >= 0) {
        result = `${result}${doToString[i]}`;
        i = i - 1;
    }
    return +result;  
}
