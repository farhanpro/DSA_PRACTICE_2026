const shiftZerosToLast = (arr) =>    {
    let foundZero = arr.length-1 ;
    for(let i=arr.length-1;i>0;i--)
    {
        if(arr[i] ===0)
        {
            [arr[foundZero] ,arr[i]] = [arr[i],arr[foundZero]];
            foundZero --;
        }
    }

    return arr;

}

console.log(shiftZerosToLast([1,0,2,0,3,0,4,5,0]));
