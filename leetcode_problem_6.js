var convert = function(s, numRows) {
    if(s === null || s.length === 0 || numRows <= 0) { // string null mu
      return "";                                      // değil mi kontrol etmek için.
      
    }
    
    if(numRows === 1) {
      return s;
    }
    
    var res = ''; // Sonuc olarak döndüreceğimiz string
    var size = 2 * numRows - 2;
    
    for(var i = 0; i < numRows; i++) { // döngünün satır sayısından 1 küçük olmasını istiyoruz.
      for(var j = i; j < s.length; j += size) { // ikinci döngünün string'in uzunluğundan küçük olması gerekli
        res += s[j];                            // verilen stringin j.elemanını oluşturduğuumuz boş stringe atıyoruz.
        
        if(i !== 0 && i !== numRows - 1) { // ilk ve son satır hariç olması için
          var tmp = j + size - 2 * i;
          if(tmp < s.length) { // uzunluk kontrolü
            res += s[tmp];
          }
        }
      }
    }
    
    return res;
  };
