/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    let spaces = text.split('').filter(char => char === ' ').length;

    let words = text.split(' ').filter(word => word.length);

    if (words.length === 1) {
        return words[0] + ' '.repeat(spaces);
    }

    const numberOfSpacesBetweenWords = Math.floor(spaces / (words.length - 1));

    const remaingSpaces = spaces % (words.length - 1);

    return words.join(" ".repeat(numberOfSpacesBetweenWords)) + " ".repeat(remaingSpaces);



    // console.log(spaces);
    // console.log(words);
};