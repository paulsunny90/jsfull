// //recursev function
// function factorial(n) {
//   if (n === 0) {    
//     return 1;
//     } else {        
//     return n * factorial(n - 1);
//     }
// }


// console.log(factorial(5)); 
// console.log(factorial(0)); 


// infinite recursion
//  let i=0
// function asdd() {
//     console.log("asdd" +i);
//     i++;
//     if(i<5)
//     asdd();
// }

// asdd();
// //factorial
// function asd(n){
//     if(n==0){
//         return 1;
//     }
//         return n * asd(n-1);
    

    // let=5
    // console.log(typeof typeof 5);

    // let a=5;
    // console.log(a===a);

    //function scope
    // function asd(){
    //     let a=5;
    //     console.log(a);
    // }    
    // asd();
    // console.log(a);  
    
    //block scope
    // {
    //     let a=5;
    //     console.log(a);
    // }    
    // console.log(a);
    // var a=5;
    // console.log(a);   
    // {
    //     var a=10;
    //     console.log(a);
    // }   
    
    
    // let a="5";
    // console.log(typeof typeof a);

    

    // // 1. Add Two Numbers

    // function asd(a,b){
    //     console.log(a +b)

    // }
    // asd(5,5)

    // // . Find Square of a Number
    // function Square(a){
    //     return a*a
    // }
    // console.log(Square(6))

    // even or ord

    // function asd(x,m){
    //     if( x%2===0 && m%2===0 ){
    //         return "even"

    //     }
    //     return "ored"

    // }
    // let y= asd
    //  console.log(y(2,4))


    let x="hello world"
    // console.log(x.length)
    // console.log(x.toUpperCase())
    // console.log(x.toLowerCase())
    // console.log(x.includes("world"))
    // console.log(x.split(" hello "))
    // console.log(x.replace("world","paul"))
    // console.log(x.charAt(0))
    // console.log(x.indexOf(" "))
    // console.log(x.lastIndexOf("h"))
    // console.log(x.slice(0,-5))
    // console.log(x.substring(0,10))   
    // console.log(x.trim(10))
    // console.log(x.startsWith("x"))
    // console.log(x.endsWith("d"))
    // console.log(x.repeat(20))
    // console.log(x.concat(" js"))
    // console.log(x.search("d"))
    // console.log(x.match("d"))
    // console.log(x.valueOf(5))
    // console.log(x.includes("world"))
    // console.log(x.padStart(20,"*"))
    // console.log(x.padEnd(20,"*"))
    // console.log(x.split(" "))

    // arr=x.split(" ")
    // console.log(arr)
    // x=arr.join(" ")
    // console.log(x)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
//palindrome
// let str="malayalam"
// let data=""
// for(let i=str.length-1;i>=0;i--){
//     data+=str[i]
//     if(str===data){
//         console.log(" it is palindrome")
//     }
//     else{ console.log(str+" not palindrome")} 

// }


//count vowels
// let str="malayalam"
// let i=0
// for( i=0; i<=str.length;i++){
//     if(str[i] === "a"|| str[i] === "e" || str[i] === "i"|| str[i] === "o" || str[i] === "u"){
//      console.log("vowels",str[i])
     
//     }
//     else{
//         console.log(" no vowels",str[i]);
//     }

    
// }

// let y="malayalam"
//  let i=0
// for(i<y;i++;){
//     i++
  

// } 
//     console.log(i)
// let todo=[];


//replace all spaces with hyphen
// let str="hello teme  have a good day"
// let data=""
// for(let i=0; i<str.length;i++){
//     if(str[i]===""){
//         data+="-"
//     }
//     else{
//         data+=str[i]
//     }
// }
// console.log(data)


// //count the duplicate characters in a string
//   let dup="programming";
//   let count ={}
//   for(let i=0; i<dup.length;i++){
//      let letter=0
//      for(let j=0;j<dup.length;j++){
//         if(dup[i]===dup[j]){
//             letter++
//         }
//      }
//      if(letter>1){
//         count[dup[i]]=letter
//      }
//   }
//   console.log(count)

// //extract numbers from a string





// //find the largest word  and smallest word in a array 
// let arr=["hello","teme","have","a","good","day"]
// let largest=arr[0]
// let smallest=arr[0]
// for(let i=1;i<arr.length;i++){
//     if(arr[i].length>largest.length){
//         largest=arr[i]
//     }
//     if(arr[i].length<smallest.length){
//         smallest=arr[i]
//     }


// }console.log("largest word:",largest)
// console.log("smallest word:",smallest)


// // a array remove duplicates
// let arr1=[1,2,2,3,4,4,5]
// let uniqueArr=[]    
// for(let i=0;i<arr1.length;i++){
//     if(!uniqueArr.includes(arr1[i])){
//         uniqueArr.push(arr1[i])
//     }
// }
// console.log(uniqueArr)   
// false value
// let arr=[ 0, "." ,3,3,0,false]
// let value=[]
// for(let i=0;i<arr.length;i++){
//     let elements=arr[i]
//     if(typeof elements==="number" && !isNaN(elements)){
//         value.push(elements)

//     }
//     else{
//         "erorr"

//     }

// }
// console.log(value)


// sum of even and odd
// let sum =0
// for(let i=0;i<50;i++){
//     if( i%2===0){
//         sum=i
//     }

// }



// let arr =[1,5]
// arr.forEach(()=>{
//     console.log(arr)
// })

// let X=arr.map(( value,index)=>`${index}-${value}`)   

// console.log(X)
// //filter
// let Y=arr.filter((value)=> value%2===0)
// console.log(Y)
// //reduce
// let Z=arr.reduce((accumulator,currentvalue)=> accumulator+currentvalue,0)
// console.log(Z)
// //find
// let W=arr.find((value)=> value>2)
// console.log(W)
// //some
// let A=arr.some((value)=> value>2)
// console.log(A)
// //every
// let B=arr.every((value)=> value>2)
// console.log(B)


// let todo=[];
// while(true){
// let input= prompt("enter input value\n[1] add task\n[2] display task\n [3] Edit task \n [4] Delete task \n [5] exit");
// //add
// if(input==1){
//     let task=prompt("enter your task");
//     todo.push(task);    
// } 
// //display  
// else if(input=="2"){
//     str=``
//     for(let i=0;i<todo.length;i++){
//         str+= `[${i+1}]${todo[i]}\n`;
//     }
//     alert(str);
// }
// //edit
// else if(input=="3"){str=``
//     for(const[index,task] of todo.entries()){
//         str+= `[${index+1}]${task}\n`;
//     }``
//     let edit=prompt(`${str}\n enter task number to edit`).split(",");
//     todo[edit[0]-1]=edit[1];
// }
// //delete
// else if(input=="4"){str=``
//     for(const[index,task] of todo.entries()){
//         str+= `[${index+1}]${task}\n`;
//     }
//     let Delete =prompt(`${str}\n enter task number to delete`)
//     todo.splice(Delete-1,1)
// }

// //exit  
// else if(input=="5"){ 
//     break;
// }
// else("invalid input");
// }

//febonacci
// let n1=0 , n2=1;
// let nextterm;
// for(let i=0;i<=10;i++){
//     console.log(n1)
//     nextterm =n1+n2
//     n1=n2
//     n2=nextterm;

// }

// odd &even Number sum

// let even =0;
// let odd=0;
// for(let i=0;i<=50;i++){
//     if(i%2==0){
//         even=even+i
//     }
//     else{
//         odd=odd+1
//     }
// }
// console.log(even)
// console.log(odd)

// let num =927;
// let largest=0;

// while(num>0){
//     let digit=num%10;
//     if(digit>largest){
//         largest=digit
//     }
//     num=Math.floor(num/10)
// }
// console.log(largest)

// swap to num
// let a=10
// let b=5
// console.log('a+'+a,"b="+b)
// a=a+b
// b=a-b
// a=a-b
// console.log('a+'+a,"b="+b)


// let todo={}
// while(true){
//     let input= prompt("enter input value\n [1] add task\n x[2] add phone number\n[3] display task\n [4] Edit task \n [5] Delete task \n [6] exit");
//     if(input==1){
//       let name=prompt("add name")
//       todo.push(name)
//     }
//     else if( input==2){
//         let num=prompt("add phone number")
//         todo.push(num)

//     }

//     else if( input===6){
//     break
//     }
//      else("invalid input");
// }
    
// object destructuring
// object nested destructuring
// array destructuring
// array nested destructuring
// deep copy
// // shallow copy

// const colors = ["red", "green", "blue"];

// const [first, second, third] = colors;

// console.log(first,second,third);

// const student = {
//   name: "John",
//   address: {
//     city: "Kochi",
//     pincode: 682020
//   }
// };

// const { address: { city, pincode, },name,} = student;

// console.log(city,name);     // "Kochi"
// console.log(pincode);  // 682020
// console.log();



// const numbers = [1, [2, 3], 4];

// const [a, [b, c], d] = numbers;


// const person1 = {
//   name: "Paul",
//   address: { city: "Kochi" }
// };

// // 🪞 Shallow copy using spread (...)
// const person2 = { ...person1 };

// // Change inner object
// person2.address.city = "TVM";

// console.log(person2.address.city); // "TVM" 😢

// console.log(a, b, c, d);  // 1 2 3 4


// const person1 = {
//   name: "Paul",
//   address: { city: "Kochi" }
// };

// // 🌊 Deep copy using JSON method
// const person2 = JSON.parse(JSON.stringify(person1));

// // Change inner object
// person2.address.city = "TVM";

// console.log(person2.address.city); // "Kochi" ✅


// let obj =[{name:"paul",age:"55","city":"ernakulam"},{name:"paul",age:"55","city":"ernakulam"}]
// let jsonobj=JSON.stringify(obj)
// console.log(obj)
// console.log(jsonobj)
// let obj1=JSON.parse(jsonobj)
// console.log(obj1)


// let a=10
// let b=a
// b+=1
// console.log(a,b)


// a=[100]
// b=[...a]
// b[0]+=1
// console.log(a)
// console.log(b)


function outerfun( ){
   let outervwr ="hellow iam outer"

   function innerfun(){
    console.log(outervwr)
   }
   return innerfun
}
const example=outerfun();
console.dir(example)
console.log(example)
example()



function createcount(){
  let count=0
  function counts(){
    count+=1
    console.log(count)
  }
  return counts
}