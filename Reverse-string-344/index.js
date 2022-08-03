// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

//assign h== first o==last since its an array its -1
// the first should equal the last
//store everything in a temporary variable each time increasing the first and decreasing the last

// let first = 0
// let length = s.length-1
//use a while loop to loop thru 
// while(first <= last){
//     let temp =s[first]
//     s[first] = s[last]
//     s[last]= temp
//     first++
//     last--
// }

var reverseString = function(s) {
    let first = 0
    let last = s.length-1
    while (first <= last){
     let temp =   s[first] 
        s[first] =s[last]
        s[last] = temp
        first++
        last--
    }return s
};