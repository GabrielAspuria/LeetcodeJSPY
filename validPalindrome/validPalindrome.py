class Solution:
    def isPalindrome(self, s:str) -> bool:
        if len(s) == 0 or len(s) == 1:
            return True
        string = re.sub('[^a-zA-Z0-9]+', '', s).lower()
        i = 0
        j = len(string) - 1
        while i < j:
            if(string[i] != string[j]):
                return False
            i += 1
            j -= 1
        return True
