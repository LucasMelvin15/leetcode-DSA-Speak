// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Input: s = "God Ding"
// Output: "doG gniD"


var reverseWords = function(s) {
    return s.split('').reverse().join('').split(' ').reverse().join(' ')
};

// the first part reverses the order in the opposite way thus we need to reverse to maintain the initial order