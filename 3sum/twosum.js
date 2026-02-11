const twoSum =(nums,num)=>{
    debugger;

    let left = 0;
    let right = nums.length -1;
    while(left<right)
    {
        if(nums[left] + nums[right] === num)
        {
            return [left +1,right +1];
           
        }
        if(nums[left] + nums[right] <num)
        {
            left ++;
        }
        else
        {
            right --;
        }
    }
    
}
console.log(twoSum([2,7,11,15], 9));    // [1, 2]
console.log(twoSum([2,3,4], 6));        // [1, 3]
console.log(twoSum([-1,0], -1));        // [1, 2]
console.log(twoSum([3,2,4], 6)); // [5, 6]

