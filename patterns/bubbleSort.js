const BubbleSort = (arr) =>{
    for(let i =0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[j] > arr[j+1])
            {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }

    return arr;
}

console.log(BubbleSort([23,1,3,4,21,6,5,4,3,21,8,9,0]))