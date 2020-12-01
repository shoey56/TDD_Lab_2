var vowels = ["a", "e", "i", "o", "u"];
var vowelsPlusY = ["a", "e", "i", "o", "u", "y"];
var vowelStart = true;

function translate(text) {
    //make string lowercase
    text = text.toLowerCase();
  //split text into an array
  const textArray = text.split("");
  var firstLetter = textArray[0];
  //if first letter is a vowel
  if (vowels.includes(firstLetter)) {
    text = `${text}way`;
  } else {
    // if consonant and not y
    do {
    textArray.push(textArray.shift());
    firstLetter = textArray[0];
    vowelStart = vowelsPlusY.includes(firstLetter);
    } while (!vowelStart);
    text = textArray.join("") + "ay";
  }
  console.log(text);
  return text;
}
