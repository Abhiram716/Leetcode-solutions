/**
 * @param {number[]} nums
 * @return {number}
 */
// time O(N) space O(N)
var numIdenticalPairs = function(nums) {
    const map = {}
    let count = 0
    
    for (const number of nums) {
        if (map[number]) {
            count += map[number];
            map[number] += 1;
        } else {
            map[number] = 1;
        }
    }
    return count
};