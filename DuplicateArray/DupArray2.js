const findDups2 = (arr) =>{
    for(i=0;i<arr.length-1;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            if(arr[i] === arr[j]){
                return arr[i]
            }
        }
    }
    return -1;
}

console.log(findDups2([2,1,5,5,5,0]));
console.log(findDups2([1,2,3,4,5]));