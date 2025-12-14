const Pyramid = ()=>{
    for(let i = 0;i<7  -1;i++)
    {
        for(let space =0;space <= 6 -i;space++)
        {
            process.stdout.write(' '); 
        }
        for(let j=0;j<= i *2 ;j++)
        {
             process.stdout.write('*'); 
        }
        console.log();
    }

}

console.log(Pyramid());