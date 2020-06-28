var plusOne = function (digits) {
    // Toplamadan sonra taşımanın gerekli olup olmadığının karar verilmesi
    var carry = 0;

    for (var i = digits.length-1; i> = 0; i-) {
        // Şuanki sayı basamaklarını kendisiyle toplamak + yuvarlama
        digits [i] = digits [i] + carry;

        // Listedeki tek basamaklı olan son sayı, 1 ekliyoruz.
        if (i == digits.length-1) {
          digits [i] = digits [i] + 1;
        }

        // Şimdiki sayı basamakları 10 ise (+1'den ötürü 10'u aşamaz)
        if (digits [i] == 10) {
          digits [i] = 0;
          carry = 1;
        } else {
          carry = 0;
        }
    }

    // Taşıma mümkün ve varsa
    if (carry == 1) {
        digits.unshift (carry);
    }

    return digits;
};
