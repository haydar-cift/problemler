function sumSquares(n) {
    var sum = 0;
    while (n > 0) {
        sum += Math.pow(n, 2);
        n--;
    }
    return sum;
}

function squareSum(n) {
    return Math.pow( (n*(n+1))/2, 2 );
}

function diffss(n) {
    return squareSum(n) - sumSquares(n);
}

console.log( diffss(100) );
