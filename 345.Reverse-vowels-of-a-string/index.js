// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// Input: s = "leetcode"  "hello"
// Output: "leotcede"   "holle"


   // JavaScript program to reverse order of vowels
     
    // utility function to check for vowel
    function isVowel(c) {
        return (c == 'a' || c == 'A' || c == 'e'
                || c == 'E' || c == 'i' || c == 'I'
                || c == 'o' || c == 'O' || c == 'u'
                || c == 'U');
    }
   
    // Function to reverse order of vowels
    function reverseVowel(str1) {
        let j = 0;
        // Storing the vowels separately
        let str = str1.split('');
        let vowel = "";
        for (let i = 0; i < str.length; i++) {
            if (isVowel(str[i])) {
                j++;
                vowel += str[i];
            }
        }
   
        // Placing the vowels in the reverse
        // order in the string
        for (let i = 0; i < str.length; i++) {
            if (isVowel(str[i])) {
                str[i] = vowel[--j];
            }
        }
   
        return str.join("");
    }


    //leetcode final solution
    function isVowel(c) {
        return (c == 'a' || c == 'A' || c == 'e'
                || c == 'E' || c == 'i' || c == 'I'
                || c == 'o' || c == 'O' || c == 'u'
                || c == 'U');
    }
   
      var reverseVowels = function(s) {
      let j = 0;
        
        let str = s.split('');
        let vowel = "";
        for (let i = 0; i < str.length; i++) {
            if (isVowel(str[i])) {
                j++;
                vowel += str[i];
            }
        }
     for (let i = 0; i < str.length; i++) {
            if (isVowel(str[i])) {
                str[i] = vowel[--j];
            }
        }
   
        return str.join("");
};

