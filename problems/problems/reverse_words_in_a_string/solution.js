/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.trim().split(/\s+/);

    return words.reverse().join(" ");
};