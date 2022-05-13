let isPalindrome = (s) => {
    if(s.length === 0 || s.length === 1) return true;
    s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    let [i, j] = [0, s.length - 1]
    while(i < j){
        if(s[i] != s[j]) return false
        i++
        j--
    }
    return true
}
