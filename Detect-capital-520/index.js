// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Input: word = "USA"
// Output: true
// or if the first letter is capital then its true

// check for word count
// let capitalCount = 0
//use a for loop to loop thru
// inside the for loop assign the array to a letter variable
// use if to check for number of uppercases
// for (let i=0; i< word.length ; i++ ){
//     const letter = word[i]
//     if(letter == letter.toUppercase()){
//         capitalCount+=1
//     }
// }
// return (capitalCount==word.length||
//     capitalCount ==0||
//     (word[0]==word[0].toUppercase() && capitalCount===1)
//     )


    var detectCapitalUse = function(word) {
        let capitalCount = 0
        for(let i= 0; i< word.length; i++){
            const letter = word[i]
            if(letter  ==letter.toUpperCase()){
                capitalCount+=1
            }
        }
        return(
        capitalCount ==word.length||
        capitalCount == 0||
        (word[0]===word[0].toUpperCase()&& capitalCount===1)
        )
    };