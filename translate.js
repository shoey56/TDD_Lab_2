const { launcher } = require("karma");

class translate {
    constructor(language = 'en_us'){
        this.language = language;
    }
}

translate(text){
    //split text into an array
    const textArray = text.split('');
    var firstLetter = textArray[0];
    //if first letter is a vowel
    if (firstLetter == "a" || firstLetter == "e" || firstLetter == "i" || firstLetter == "o" || firstLetter == "u"){
        text = `${text}way`;
    }
    console.log(text);
}


const translate = new translate();
