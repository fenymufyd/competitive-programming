// valid anagram
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false
        let text1 = s.split("").sort().join("");
        console.log(text1);
        let text2 = t.split("").sort().join("");
        console.log(text2);
        return text1 == text2
    }
}
