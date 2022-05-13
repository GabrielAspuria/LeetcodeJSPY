class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        prevNums = set()
        for i in nums:
            if i in prevNums:
                return True
            else:
                prevNums.add(i)
        return False
        