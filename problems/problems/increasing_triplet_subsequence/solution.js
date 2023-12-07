/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity,
        second = Infinity;
    for(let i of nums){
        if (i > second){
            return true
        }

        if(i > first){
            second = i;
        } else {
            first = i
        }
    }

    return false;
};