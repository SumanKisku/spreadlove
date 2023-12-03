const { curseWords, emojiArray } = require("./curseWords")

function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojiArray.length);
    return emojiArray[randomIndex];
};

function spreadLoveEmojis(input) {
    // Regular expression to match curse words in a case-insensitive way
    const curseRegex = new RegExp(curseWords.join("|"), "gi");

    // Replace curse words with corresponding emojis
    const result = input.replace(curseRegex, getRandomEmoji());

    return result;
}

// Example usage
const originalMessage = "fuck you motherfucker";
const modifiedMessage = spreadLoveEmojis(originalMessage);
console.log(modifiedMessage);

module.exports = spreadLoveEmojis;