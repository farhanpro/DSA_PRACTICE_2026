const findDuplicates = (arr) =>{
    let uniqueVals = 1;
    for(let i=1;i<arr.length;i++){
        if(arr[i] !== arr[i-1])
        {
            arr[uniqueVals] = arr[i];
            uniqueVals++;
        }
    }
    return arr;
}
console.log(findDuplicates([1,1,2,3,4,4,5,5,6,6,7,7]));