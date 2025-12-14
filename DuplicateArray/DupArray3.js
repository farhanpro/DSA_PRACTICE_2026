const RemoveDuplicateFromSorted = (arr) =>{
    
    let finalLength =0
    for(let i=0;i<arr.length;i++)
    {
        
        if(arr[i] !== arr[i+1])
        {
            finalLength++;
        }
    }
    return finalLength

}

console.log(RemoveDuplicateFromSorted([1,1,2,3,4,4,6,6,7]));