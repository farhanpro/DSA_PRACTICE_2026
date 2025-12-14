const RotateArray =(arr)=>{
    let temp = [];
    for(let i=arr.length -1; i>=0; i--)
    {
        temp.push(arr[i])
    }

    return(temp);
}

console.log(RotateArray([2,3,1,4,5,0]));