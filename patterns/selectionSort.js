const selectionSort =(arr)=>{
    for(let i=0;i<arr.length -1;i++)
    {
        let minIndex = i;
        for(let j= i+1;j<arr.length;j++)
        {
            if(arr[j] < arr[minIndex])
            {
                minIndex = j;
            }
        }
        if(minIndex !== i)
        {
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return(arr);
}

//selectionSort([2,3,2,4,5,3,1,3,50])
 console.log(selectionSort([2,3,2,4,5,3,1,3,50]));