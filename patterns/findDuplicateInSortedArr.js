const findDuoplicateInSortedArr = (nums) => {
let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return nums;

}


console.log(findDuoplicateInSortedArr([1,1,2,2,3,3,4,4,5,5,6,6]));