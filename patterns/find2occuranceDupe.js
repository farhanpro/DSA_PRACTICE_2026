const findExact =(arr)=>{
    for(let i=0;i<arr.length;i++)
    {
        let count =1;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i] === arr[j])
            {
                count++;
            } 
            
        }
        if(count ===2)
        {
            return arr[i]
        }
          
    }
    return -1
}
console.log(findExact([2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));
console.log(findExact([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));
console.log(findExact([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1]));