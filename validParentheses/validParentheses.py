class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        hashMap =  { '(' : ')', '[' : ']', '{' : '}' }
        stack = []

        for ch in s:
            if ch in hashMap:
                stack.append(hashMap[ch])

            elif stack and stack[-1] == ch:
                stack.pop()

            else: return False

        return True if not stack else False
