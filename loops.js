console.log("loops in javaScript")

// loop use for repeatative tasks 

/* types of loop*/

// 1.. for loop

/* 
syntax 
for (initialisation, condition , updation) {
      // code
}
*/

// example

for (let i=1;i<10;i++) {
    console.log()
    console.log(i+2)
}
// 2.. forinloop
/* forin loop object k data par lagti h only in javascript*/
 let obj={
    name:"Rihan Khan",
    roll_no: 40,
    class:"BCA 2nd Year",
 };

/* name is key and Rihan khan is Value of key 
right side ka part value hota h("Rihan khan" is the value of key)
jo left side mein hoti h vo key hoti h(name is a key)
*/

 for (let key in obj)
     {
    // if (!Object.hasOwn(obj, key)) continue;
    let element = obj[key];
    console.log(key,element)
    
 }

//  3...forof loop

// array ya string k data(interable data) ko ek ek karke access karne ke liye forof loop ka use hota h

// creation of array in js

let arr=[10,40,50,70]

for (let value of arr) {
    console.log(value)
    
}

// creation of string in array

let nam="rihan khan"

for (const ch of nam) {
    console.log(ch)
}

// 4...while loop
let i=2;
while (i<8) 
{
    console.log(i)
    i++
}

// 5..do while loop 
// ye loop kam se kam ek baar chalta hi chalta kyuki condition baad mein check hoti h sir G.

let k=20;
do {
    console.log(k)
    k++;
} while (k<4);
