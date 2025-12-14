const smallestAndLargest = (arr) =>{
        let smallest = arr[0];
        let largest = arr[0];
        for(i=0;i<arr.length;i++)
        {
            if(arr[i] < smallest)
            {
                smallest = arr[i]
            }
            if(arr[i] > largest)
            {
                largest = arr[i]
            }
        }
        return `Smallest ${smallest} Largest ${largest}`
}

console.log(smallestAndLargest([43,23,545]))