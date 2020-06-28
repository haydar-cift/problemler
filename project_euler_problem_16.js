function sumOfDigits(n,pow) {
    var digits = [1]; // 
    while (pow--) {
        var cr = 0;
        for (var i = 0; i < digits.length; i++) {
            var num = n * digits[i] + cr;
            digits[i] = num % 10;
            cr = Math.floor(num/10);
        }
        while (cr > 0) {
            digits.push(cr % 10);
            cr = Math.floor(cr/10);
        }
    }
    var sum = 0;
    while (digits.length) {
        sum += digits.shift();
    }
    return sum;
}


console.log( sumOfDigits(2, 1000) );
