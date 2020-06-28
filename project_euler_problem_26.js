function recurringLength(n) {
    var remainders = [], value = 1, i = 0;
    while (!remainders[value] && value !== 0) { //kalan 0 mı değil mi
        remainders[value] = i;                  // 0 değilse i değerini ata
        value *= 10;                            
        value %= n;                             // Kalanı n'e atıyoruz
        i++;                                    // while sonsuz olmasın diye i artırıyoruz
    }	
    return i - (remainders[value] || 0);        // Virgülden sonraki kısım
}

function maxReccuringLength(d) { // max değer fonksiyonu
    var max = 0; // max 0 kabul ediyoruz
    for (var i = 1; i <=d; i++) {
        if (max >= i) continue; // max, i'den büyükse max'ın değeri aynı kalmalı.
        if (recurringLength(i) > max) { // max'ın değerinin değiştirip
            max = i; // değiştirilmeyeceğine karar veriyoruz, koşul sağlanırsa değer
        }
    }
    return max;
}

console.log( maxReccuringLength(1000) );
