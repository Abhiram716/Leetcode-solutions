/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {

        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        }

        else {
            map.set(nums[i], 1);
        }
    }

    for (let [key, value] of map) {
        if (map.get(key) === 1) return key
    }

    return -1;
};