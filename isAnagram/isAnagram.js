/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    let letters = {}

    for (let letter of s) {
        if (letters[letter] === undefined) {
            letters[letter] = 1
        } else {
            letters[letter]++
        }
    }
    for (let letter of t) {
        if (letters[letter] === undefined) return false
        if (letters[letter] < 1) return false
        letters[letter]--
    }
    return true
};
