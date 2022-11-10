const vnu=require('readline-sync')
let a=vnu.questionInt("Ente any number : ");
let z=a;
let last=a%10;
while(a>=10)
{
    a=a/10;
}
let first=a;
let sum=first+last;
console.log("sum if 1st nd last digit of",`${z}`," is : ",sum);
