const sumAndAverage = (arr) => {
    let sum = 0;
    let count =0;
    let average = 0 ;
    for(let i=0;i<arr.length;i++)
    {
        sum += arr[i]
        count ++;
    }
    average = sum/count 
    return `Sum of the array ${sum} and Average ${average}`
}


console.log(sumAndAverage([1,2,3,4,5,6]));