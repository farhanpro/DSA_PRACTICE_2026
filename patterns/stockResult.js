const stockResult = (arr) =>{
    let result =[];
    let preval =0;
    for(let i=0;i<=arr.length;i++)
    {
        if(arr[i] - arr[i+1] >0)
        {
            if(preval <= arr[i] - arr[i+1])
            {
                preval = arr[i] - arr[i+1]
                result.pop();
                result.push(`If stock bought on ${i} day of value ${arr[i]} and sold on ${i +1}  with the value of ${arr[i+1]} then Profit could be ${arr[i] - arr[i+1]}`)
            }
     //console.log();
        }
       
    }
    console.log(result)
}


stockResult([3,2,4,2,3,5]);