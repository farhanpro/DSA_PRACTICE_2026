const removeTargetedElement = (arr, target) => {
    if(arr.length ===0) return arr;
    let uniqueValue =0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] !== target){
            [arr[i],arr[uniqueValue]] = [arr[uniqueValue],arr[i]];
            uniqueValue ++;
        }
    }

    return arr.slice(0,uniqueValue);

}


console.log(removeTargetedElement([0,1,2,2,3,0,4,2],2));