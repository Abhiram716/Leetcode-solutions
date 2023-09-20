/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

   const arr1 = nums.slice(1,n);
   const arr2 = nums.slice(n); 

    for(let i = 1; i<nums.length;i++){
        if(i%2 !== 0){
            nums[i] = arr2.shift();
        }
        else{
            nums[i] = arr1.shift();
        }
    }

   return nums; 
};

// [2,5,1,3,4,7]

// arr1 =  [2,5,1]
// arr2 =  [3,4,7]

//  [2,3,5,4,1,7]

