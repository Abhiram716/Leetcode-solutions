/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let prefixArray = [];
    let suffixArray = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            prefixArray[i] = 1;
        } else {

            prefixArray[i] = prefixArray[i - 1] * nums[i - 1];
        }

    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            suffixArray[i] = 1;
        }
        else {

            suffixArray[i] = suffixArray[i + 1] * nums[i + 1];
        }
    }

    let output = [];

    for (let i = 0; i < nums.length; i++) {
        output[i] = prefixArray[i] * suffixArray[i]
    }

    return output;
};