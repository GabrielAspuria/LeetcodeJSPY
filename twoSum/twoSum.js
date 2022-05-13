/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 let twoSum = function(nums, target) {
    let numbers = {}
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        let neededNum = target - currentNum
        let index2 = numbers[neededNum]
        if(index2 != null) {
            return [index2, i]
        } else {
            numbers[currentNum] = i
        }
    }
}
