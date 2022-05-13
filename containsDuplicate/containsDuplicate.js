var containsDuplicate = function(nums) {
    let prevNums = {}
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        if(prevNums[currentNum] != null) {
            return true
        } else {
            prevNums[currentNum] = i
        }
    }
    return false
};
