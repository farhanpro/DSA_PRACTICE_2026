const findZeros = (arr)=>{
    let minIndex =0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] !==0)
        {
            [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]];
            minIndex++;
        }
    }
    return arr;
}

console.log(findZeros([0,0,1,2,3,4,5,0,9,4,2,45,0]))

