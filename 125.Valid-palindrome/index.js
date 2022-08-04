// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


//1.empty string should return true
//should remove all the non-alphanumeric charactres
//join a string , reverse, check for a palindrome


var isPalindrome = function (s) {
    if (s.length === 0) return true;
  
    s = s.toLowerCase();
    let i = 0, j = s.length - 1;
    while (i < j) {
      if ((s[i] < 'a' || s[i] > 'z') && (s[i] < '0' || s[i] > '9')) {
        i++;
        continue;
      }
      if ((s[j] < 'a' || s[j] > 'z') && (s[j] < '0' || s[j] > '9')) {
        j--;
        continue;
      }
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
  
    return true;
  };
  //check for an empty string 
  //use two loops to loop thru the string 
  //decreasing the backward string while increasing the forward string
  //for both string shld be less than 0 and > 9 || <a &&>z
  //check if the strings are equal 

 