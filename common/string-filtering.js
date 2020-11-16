var string = "Привет! Как дела?";

const getVowels = str => {
    var vowels = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и"];
    str = str.toLowerCase();
    let vowelsOfStr = "";
    for(var i = 0; i < str.length; i++){
        if(vowels.includes(str[i])) {
            vowelsOfStr += str[i];
        }
    }
    return vowelsOfStr;
}

console.log(getVowels(string));
