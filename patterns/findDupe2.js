const findSecondOccurance = (arr) =>{
  for(let i=0;i<arr.length -1 ;i++)
  {
   
    for(let j = i+1;j<arr.length;j++)
    {
      if(arr[i]=== arr[j])
      {
        return arr[i];
      }
    }

    
  } 
   return -1;
}

console.log(findSecondOccurance([43,53,1,324,54,64,324,231,32,,12,45,4,23,23,3]));