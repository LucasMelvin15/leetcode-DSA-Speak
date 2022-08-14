// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

let containsDuplicate = function(nums){
    const hashTable = new Map()

    for(let i =0; i<nums.length; i++){
        if(hashTable.has(nums[i])) return true
        else{hashTable.set(nums[i], true)}
    }
     return false
}

// map stores values as key and value pair. The value is unique 
//Map is created using let map = new Map()