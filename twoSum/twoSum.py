class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numbers = {}
        for i, n in enumerate(nums):
            neededNum = target - n
            if neededNum in numbers:
                return [numbers[neededNum], i]
            numbers[n] = i
