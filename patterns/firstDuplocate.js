const findDuplicate = (arr) => {
    let duplicate =[];
    let occurance =[];
    for(let i=0;i<arr.length;i++)
    {
        let count = 1;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i] === arr[j])
            {
                count ++
            }
        }

        let RepeatEntry = false
        if(count>1)
        {
            for(let k=0;k<duplicate.length;k++)
            {
                if(arr[i] === duplicate[k])
                {
                    RepeatEntry = true;
                    break;
                }
            }
            if(RepeatEntry === false)
            {
                duplicate.push(arr[i]);
                occurance.push(count);

            }
        }
    }
    for(let i=0;i<duplicate.length;i++)
    {

        console.log(`Entry ${duplicate[i]} repeated ${occurance[i]}`)
    }
}
findDuplicate([4,2,3,4,5,3,2,1,1,4,4,3]);
