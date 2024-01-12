//mine

var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    x = x.toString();
    let i = 0;
    let j = x.length -1;
    while(i < j){
        if(x[j] !== x[i]){
            return false;
        }
        i++;
        j--;
    }
    return true;
};

console.log(isPalindrome(1011))


//theirs

var isPalindrome = function(x) {
    var reverse = 0;
    var copy = x;
    while (copy > 0) {
        const digit = copy % 10;
        reverse = reverse * 10 + digit;
        copy = ~~(copy / 10);
    }

    return reverse == x;
};