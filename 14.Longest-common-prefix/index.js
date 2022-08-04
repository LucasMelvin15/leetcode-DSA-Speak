// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs){
    let prefix = ""
    if(strs ===null || strs.length===0) return prefix

    for(let i = 0; i< strs[0].length; i++){
        const char = strs[0][i] //loop thru the very first characters in the string
         for(let j =0; j<strs.length; j++){
            if(strs[j][i] !==char)
            return prefix
         }
         prefix = prefix  + char
    }

    return prefix
}
