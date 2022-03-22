// count fs : function that count f characters in a word

function countLetter(word, letter) {
  let wordLength = word.length;
  let currentPosition = 0;
  let count = 0;

  let isSameCharacter = (character, otherCharacter) =>
    character.toLowerCase() === otherCharacter.toLowerCase();
  while (currentPosition < wordLength) {
    if (isSameCharacter(word[currentPosition], letter)) count++;
    currentPosition++;
  }

  return count;
}

function countFs(word) {
  countLetter(word, "f");
}
