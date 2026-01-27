const twoSum = (nums,target) =>
{
    let firstPointer = 0;
   
    for(let i=1;i<nums.length;i++)
    {
        if(nums[firstPointer] + nums[i]  === target)
        {
            return [nums[firstPointer],nums[i]]

        }
        firstPointer++;
        
    }
    return []
}

console.log(twoSum([1,2,3,4,5,6],5))