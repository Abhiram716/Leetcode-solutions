/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let word1Array = word1.split("");
    let word2Array = word2.split("");

    let resultArray = [];
    let i = 0, j = 0;

    while (i < word1Array.length && j < word2Array.length) {

        if (resultArray.length % 2 === 0) {
            resultArray.push(word1Array[i]);
            if (i === word1Array.length - 1) {
                while (j < word2Array.length) {
                    resultArray.push(word2Array[j]);
                    j++;
                }
            }
            i++;
        }
        else {
            resultArray.push(word2Array[j]);
            if (j === word2Array.length - 1) {
                while (i < word1Array.length) {
                    resultArray.push(word1Array[i]);
                    i++;
                }
            }
            j++;
        }
    }

    return resultArray.join("")
};
