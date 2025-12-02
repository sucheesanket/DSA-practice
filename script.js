// let prompt = require("prompt-sync")();
// let p= prompt("Enter Principal amount :")
// let r= prompt("entef rate of intrest:")
// let t= prompt("enter the time period:")

// let cp=p* Math.pow((1+r/100),(t))-p;
// console.log(cp.toFixed(3));

//console.log(Math.trunc((Math.random()*9000)+1000)); // after multiplying 9000 it gives from 0 to 8999 value after adding 1000 it gives 1000 to 9999 value

// let prompt = require("prompt-sync")();
// let a= Number(prompt("Enter the value of a :"))
// let b= Number(prompt("Enter the value of b :"))
// let c= Number(prompt("Enter the value of c :"))

// let s = (a+b+c)/2;

// console.log(Math.trunc(Math.sqrt(s*(s-a)*(s-b)*(s-c))));


// let prompt = require("prompt-sync")();
// let a= Number(prompt("what is the value of r :"))
// let pie=3.141;
// console.log(2*pie*a);

// let prompt = require("prompt-sync")();

// let age= Number(prompt("Enter your age : "))
// if(age>=18){
//     console.log("valid voter 4 dii election");
    
// }
// else{
//     console.log("Maa chuda jaake");
    
// }

// let prompt = require("prompt-sync")();
// let marks=Number(prompt("Enter your marks : "))

// if (marks>=90 && marks<=100){
//     console.log("you have a bright future");
    
// } else if(marks>=60 && marks<=89)
// {
//     console.log("you have to work hard");
    
// }
// else{
//     console.log("maadorchod bhosidk machhar ki jhaant gaandu maa ki chut terii");
    
// }

// let prompt = require("prompt-sync")();
// let first=Number(prompt("Enter your first number : "))
// let second=Number(prompt("Enter your second number : "))

// if (first>second) console.log("first is greater than second");
// else console.log("second is greater");

// let prompt = require("prompt-sync")();
// let marks=Number(prompt("Enter your number : "))
// if(marks%2==0) console.log("marks is even");
// else console.log("marks is odd");


// let prompt = require("prompt-sync")();
//  let num1=Number(prompt("Enter your marks : "))
//  let num2=Number(prompt("Enter your marks : "))
//  let num3=Number(prompt("Enter your marks : "))

// if (num1>num2 && num1>num3) console.log("num1 is greatest");
//  else if(num2> num1 && num2>num3) console.log("num2 is greatest");
//  else console.log("num3 is greatest");
 
//  let prompt = require("prompt-sync")();
//  let year= Number(prompt("Enter a year : "))
//  if (year % 4==0 && year % 100 !=0 ) console.log("the year is a leap year");
//  else console.log("the year is not a leap year");
 

// let prompt = require("prompt-sync")();
// let price=Number(prompt("Enter a price : "))
// if(price>=0 && price <=5000) console.log(`you have to pay ${price}`);

// else if(price>=5001 && price <=7000 )
// {
//      let price2 = price * (5/100)
//      price= price-price2
//    console.log(`you have to pay ${price}`);
    
// }
// else if(price>=7001 && price <=9000 )
// {
//     let price3 = price * (10/100)
//     price= price-price3
//     console.log(`you have to pay ${price}`);
    
// }
// else 
// {
//    let price4 = price * (20/100)
//    price =price-price4
//    console.log(`you have to pay ${price}`);
// }

// let prompt = require("prompt-sync")();
// let price=Number(prompt("Enter a price : "))
// let dis=0
// if(price>=0 && price <=5000) dis=0
// else if(price>=5001 && price <=7000 ) dis=5
// else if(price>=7001 && price <=9000 ) dis=10
// else dis=20

// console.log("Payable amount is " + (price-(price*dis)/100));

// let prompt = require("prompt-sync")();
// let unit = Number(prompt("Enter unit of electro bill : "));
// let price = 0;

// if (unit>0 && unit<=100 ) console.log(unit*4.2);
// else if(unit>=101 && unit<=200){
//     console.log((100*4.2)+(200-unit)*6);
    
// } else if(unit>=201 && unit<=400){
//     console.log((100*4.2)+(100*6)+(400-unit)*8);
    
// }
// else{
//      console.log((100*4.2)+(100*6)+(200*8)+(unit-400)*13);

// }

// let prompt = require("prompt-sync")();
// let month= Number(prompt("Enter a month : "))
// let year = Number(prompt("Enter a year : "))
// let days=0

// if(month==2)
// {
//     if(year%400==0 || year%4==0 && year /100!=0) console.log(days = 29);
//     else console.log(days =28);
    
    
// }
// else if (month==1 ||month==3 ||month==5 ||month==7 ||month==8 ||month==10 ||month==12 ) console.log(days = 31);

// else console.log( days = 30);

// let prompt = require("prompt-sync")();
// let s=Number(prompt("Enter a number : "))

// switch(s){
//     case 1: 
//     console.log("monday");
//     break;
//     case 2: 
//     console.log("tuesday");
//     break;
//     case 3: 
//     console.log("wednesday");
//     break;
//     case 4: 
//     console.log("thursday");
//     break;
//     case 5: 
//     console.log("friday");
//     break;
//     case 6: 
//     console.log("saturday");
//     break;
//     default: 
//     console.log("sundday");
//     break
    
    
// }

// let prompt = require("prompt-sync")();
// let s=prompt("Enter a string : ")
// let vowel=0 , consonant=0

// for(let i=0;i<s.length;i++){
//     let ch = s.charAt(i)
//     switch(ch){
//         case 'a' :
//         case 'e' :
//         case 'i' :
//         case 'o' :
//         case 'u' : vowel++
//         break;
//         default : consonant++
//     }
    
// }

//     console.log("vowel "+ vowel);
//     console.log("consonant "+ consonant);

// let prompt = require("prompt-sync")();
// console.log("Enter 1 for area of rectangle");
// console.log("Enter 2 for area of circle");
// console.log("Enter 3 for area of triangle");
// let n=Number(prompt())

// switch(n){
//     case 1:
//         let length=Number(prompt("Enter the value of length : "))
//         let breadth=Number(prompt("Enter the value of breadth : "))
//         console.log("area of square is : "+ (length*breadth));
//         break;

//     case 2:
//         let radius=Number(prompt("Enter the value of radius : "))
//         console.log("area of circle is : "+(3.141*radius*radius));
//         break;
//     case 3:
//         let base=Number(prompt("Enter the value for base : "))
//         let height=Number(prompt("Enter the value for height : "))
//         console.log("area of circle is : "+(0.5*base*height));
//         break;

//         default:
//             console.log("lund lele mera");
                 
// for(let i=0;i<=a;i++) console.log("sanket louda");
// }
let prompt = require("prompt-sync")();
let a=Number(prompt("Enter a number : "))

let temp=a;
let count=0;
while (a>0){
    count++
    a=Math.floor(a/10);

}
if(count===10)
{
    let ans=0;
    while(temp>0){
        let digit=Math.floor(temp%10)
        ans=Math.floor(ans+(digit*count))
        count--;

        temp=Math.floor(temp/10)
    }

    if(ans%11==0)
    {
        console.log("valid isbn number");
        
    }
    else{
        console.log("not a valid isbn nuber");
        
    }

    

}
else{
    console.log("you have not entered 10 digits");
    
}












 










