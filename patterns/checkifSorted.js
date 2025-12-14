const checkisSorted = (arr)=>{
    let sorted = true;    
    for(let i =0;i<arr.length;i++)
    {
        if(arr[i] > arr[i+1])
        {
                sorted = false;
        }
    }
    return sorted;
}

console.log(checkisSorted([1,2,3,10,5,6,7]));