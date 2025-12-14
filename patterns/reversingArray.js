const ReverseArr = (arr) =>{
    let temp = [];
    for(let i = arr.length -1;i>=0;i--)
    {   
        temp.push(arr[i])
    }
    if(temp.join('') === arr)
    {
        return ('Palindrome')
    }
    else{
        return ('NON PALINDROME')
    }
}


console.log(ReverseArr('NITINS'))