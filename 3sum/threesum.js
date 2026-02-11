const threeSum = (nums) =>{
        let results = [];
        nums.sort((a,b)=> a-b);
        let n = nums.length -1;
         
        for(let i=0;i<n;i++)
        {
            let left = i +1;
            let right = n;
            if(i>0 && nums[i] === nums[i-1])
            {
                continue;
            }
            
            while(left < right)
            {
                let sum = nums[left] + nums[i] + nums[right];
                if(sum === 0)
                {
                    results.push([nums[i],nums[left],nums[right]]);
                    if(left < right && nums[left] === nums[left +1])
                    {
                        left ++
                    }
                    if(left < right && nums[right] === nums[right -1])
                    {
                        right --
                    }
                    left++;
                    right--;
                }
                else if(sum < 0)
                {
                    left++;
                }
                else{
                    right --
                }
            }
            
        }
        return results;
}

console.log(threeSum([1,2,-1,-2,0,-3]));
console.log(threeSum([-1,0,1]));
