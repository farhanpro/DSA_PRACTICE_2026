const test2ptr = (arr)=>{
    uniqueElem =1;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == arr[uniqueElem]){
            [arr[i],arr[uniqueElem]]=[arr[uniqueElem],arr[i]];
            uniqueElem++
        }
    }
    return arr;
}

console.log(test2ptr([1,1,0,0,2,2,0,3,3,4,4,0,0]));