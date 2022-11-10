const vnu=require('readline-sync')
 let sum=0,m;
let n=vnu.questionInt("Ente any number : ");
while(n>0)
{
  m=n%10
  sum=sum+m
  n=n/10;
}
console.log(sum);