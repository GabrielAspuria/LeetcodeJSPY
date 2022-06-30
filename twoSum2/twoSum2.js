twoSum2 = (numbers, target) => {
    let l = 0
    let r = numbers.length - 1


    while(l < r) {
        let curr = numbers[l] + numbers[r]
        console.log('Left:', l, 'Right:', r)
        console.log(curr)
        if(curr > target) {
            r--
        } else if(curr < target) {
            l++
        } else {
            return [l+1, r+1]
        }
    }
}

console.log(twoSum2([1, 3, 4, 5, 7, 11], 9))
