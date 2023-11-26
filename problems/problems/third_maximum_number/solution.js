/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    
    nums.sort(function (a, b) {
        return a - b;
    }
    );
    
    let numsSet = new Set();

    for(let i of nums){
        numsSet.add(i);
    }

    let temp = Array.from(numsSet);

    if(temp.length < 3){
        return temp[temp.length-1];
    }

    return temp[temp.length-3];
    
};