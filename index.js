const { curseWords, emojiMap } = require("./curseWords")

function spreadLove(input) {
    // Regular expression to match curse words in a case-insensitive way
    const curseRegex = new RegExp(curseWords.join('|'), 'gi');

    // Replace curse words with corresponding emojis
    const result = input.replace(curseRegex, match => emojiMap[match.toLowerCase()] || match);

    return result;
}

module.exports = spreadLove;