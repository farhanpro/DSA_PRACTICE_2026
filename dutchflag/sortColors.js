const sortColors = (arr) => {

    let low = 0;
    let mid = 0;
    let high = arr.length -1 ;
    let count = 0;

    while(mid<= high){
        debugger;
        console.log(count++);
        if(arr[mid] === 2)
        {
            [arr[mid],arr[high]] = [arr[high],arr[mid]];
            high--
        }
        else if(arr[mid] === 1)
        {
            mid ++;
        }
        else{
            [arr[mid],arr[low]] = [arr[low],arr[mid]]
            low ++;
            mid ++;
        }
    }
    return arr;
}

console.log(sortColors([1,2,0,0,2,1,0,2,1,0]));