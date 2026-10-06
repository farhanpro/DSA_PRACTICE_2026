const arr = [2,1,3,4,7,9,10,2,1,3,4,5,7,8];
let largest = 0;
let secondLargest = 0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>largest)
    {
        secondLargest = largest;
        largest = arr[i]
    }

}
console.log(largest);
console.log(secondLargest);