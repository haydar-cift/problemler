var permute = function(nums) {
    var len = nums.length;
    return perm(len - 1);
    
    function perm(i) {
        if (i == 0) {
            return [[nums[0]]];
        } else if (i == 1) {
            return [[nums[0], nums[1]], [nums[1], nums[0]]]; // Recursion'dan çıkmak için bu kod çalışıyor.
        }
        var ans1 = perm(i -1);
        var size = ans1.length;
        var ans2 = [];
        var fixNum = nums[i];
        for (var k = 0; k < size; k++) {
            for (var l = 0; l <= i; l++) {
                var arr = ans1[k].slice(); // array'i kopyalamak için
                arr.splice(l, 0, fixNum); // Bu arrayin her sırasına fixNum ekle
                ans2.push(arr);
            }
        }
        return ans2;
    }  
};
