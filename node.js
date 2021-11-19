


// const bike=["apache","bullet","xpulse"]
// console.log(bike[0])

 const num1=[1,2,1,1,2,1,3,3,3,1,4,4,3,2,1,1,3,1,3,1,4,4,1,1]
let mf=1
let m=0
let item;

for(let i=0;i<num1.length;i++)
    {
for(let j=i;j<num1.length;j++)
{
    if(num1[i]==num1[j])
    m++;
    if(mf<m)
    {
        mf=m;
        item=num1[i];
    }
}
    m=0
}


console.log(item+"("+mf +"times)")

// const anu ="anu IS a GOOd Boy"
// var UPPER ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var LOWER ="abcdefghijklmnopqrstuvwxyz"
// var result= [];

// for(var i =0;i<anu.length;i++)
// {
//     if(UPPER.includes(anu[i]))
//     {
//         result.push(anu[i].toLowerCase());

//     }
//      else if (LOWER.includes(anu[i]))
//     {
//         result.push(anu[i].toUpperCase());

//     }
// else
// {
//     result.push(anu[i]);
// }
// }
// console.log(result.join(""))





// const num =[1,3,5,7,9]

// function sum_sq(num){
//     var sum=0,
//     i=num.length;
//     while(i--){
//         sum+=Math.pow(num[i],2)
//     }return sum;
// }
// console.log(sum_sq([1,3,5,7,9]))




// for (var x=0;x<=15;x++){
//     if(x === 0){
//         console.log(x + "is even");

//     }
//     else if(x % 2 === 0){
//         console.log(x + "is even")
//     }
//     else{
//         console.log(x + "is odd")
//     }
// }



// text_truncate = function(str, length, ending) {
//     if (length == null) {
//       length = 100;
//     }
//     if (ending == null) {
//       ending = '...';
//     }
//     if (str.length > length) {
//       return str.substring(0, length - ending.length) + ending;
//     } else {
//       return str;
//     }
//   };
// console.log(text_truncate("I am Muhammed Anu Binshid."))
// console.log(text_truncate("I am Muhammed Anu Binshid.",19))
// console.log(text_truncate("I am Muhammed Anu Binshid.",15,'!!'))





// const num1 = ("Input the First integer", "2");
// const num2 = ("Input the second integer", "4");
                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10)) 
//   { 
//   console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10)) 
//   {
//   console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }


// const name ="anu binshid"

// function alphabet_order(name)
//   {
// return name.split('').sort().join('');
//   }
// console.log(alphabet_order(name));




// let name ="javascript"
// for (const iterator of object) {
    
// }
    

    

    

    



// var x,y,chr;
// for(x=1; x <=5; x++)
// {
//    for (y=1; y < x; y++)
//      {
//     chr=chr+("*");        
//       }
//  console.log(chr);
//  chr='';    
// }





















  



