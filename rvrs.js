const vnu=require('readline-sync')
let n=vnu.questionInt("Enter any number : ");
let m
while(n!=0)
{
    m=n%10;
    process.stdout.write(m);
    n=n/10;

     
}

