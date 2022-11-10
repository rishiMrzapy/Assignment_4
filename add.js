const vnu=require('readline-sync')
let a=vnu.question("Ente y for procedd  : ");
if(a=="y"){
while(a!="n")
{
    let x=vnu.questionInt("enter 1st num :");
    let y=vnu.questionInt("Entr 2nd num :");
    let z=x+y;
    console.log("sum is : ",z)
   let v=choice();
   if(v=="y")
   {
      continue
   }
   else if (v=="n")
   {
    break;
   }
   else
   {
    console.log("Invalid Entery");
    break;
   }
}
function choice()
{
    let x=vnu.question("enter y for continue nd n for terminate :");
      return x
    }
}
else
{
    console.log("You not Enter y for continue")
}
// function add(a,b)
// {
//       let c=a+b;
//       console.log("sum is :",c);
// }