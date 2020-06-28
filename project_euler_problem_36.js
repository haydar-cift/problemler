function isPalindromic(a) {
    var len = a.length; // len olan değişkenin değerini sayının uzunluğuna atıyoruz
    if (len === 0 || len === 1) return true; // tek basamaklı ise koşulu sağlar
    if (len === 2) return a[0] === a[1];    // 121 örnek verilebilir.
    if (a[0] !== a[len-1]) return false;    // 12321 a[0] = 1, a[4] =1, değilse koşul sağlanmaz
    return isPalindromic(a.splice(1, len-2));
}

function findPalindromicNumbersSum(max) {
    var sum = 0; // toplam değişkeni
    while (max--) {
        if (!isPalindromic( (max+'').split('') )) continue; // 
        if (!isPalindromic( max.toString(2).split('') )) continue; //
        sum += max; // toplam değerini atıyoruz
    }
    return sum; // toplamı döndür
}

console.log( findPalindromicNumbersSum(1000000) );
