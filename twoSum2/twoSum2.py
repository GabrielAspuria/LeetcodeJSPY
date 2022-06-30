def twoSum2(numbers, target):
    l, r = 0, len(numbers) - 1

    while l < r:
        curr = numbers[l] + numbers[r]
        if curr > target:
            r -= 1
        elif curr < target:
            l += 1
        else:
            return [l+1, r+1]

print(twoSum2([1, 3, 4, 5, 7, 11], 9))
