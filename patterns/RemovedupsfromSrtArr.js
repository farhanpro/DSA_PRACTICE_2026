const RemoveDupesFromSrtArray =(arr) =>{
    let uniqueValue = 0;
    let temp = [];
    for(let i = 0;i<arr.length;i++)
    {
        if(arr[i] !== arr[i+1])
        {
            arr[uniqueValue] = arr[i];
            uniqueValue++;
        }
    }
    for(let i = 0;i<uniqueValue;i++)
    {
        temp.push(arr[i]);
    }
    return temp;
}

console.log(RemoveDupesFromSrtArray([1,1,2,2,3,4,4,5,6,6,7,8,8,9]));

[1,3,4,5,6,7,8,9,1];
[1,1,3,4,5,6,7,8,9];