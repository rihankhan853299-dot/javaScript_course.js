// what is data type?

// data type represent the type of data of variable 
// --> ye batate h ki variable mein kis tarah ka data store h ya kis tarah ka data store hoga(number ki form mein hoga ya string ki form mein ya boolean ki form mein)

// data types in java script 

// 1.. primitive
// 2.. none primitime

// 1.. primitive

1.. number 
// number is a primitive data type that store the values in form numbers

let a=5;
let t=30.8;
console.log(a,t)
console.log(typeof a,typeof t)

2.. string
// string is a primitive dta that the value in the form of collection of characters
let r="rihan khan"
console.log(r)
console.log(typeof r);

3.. bight 
// bight is a primitive dta type that the values in big numbers

let d=787656432215999;
console.log(d);
console.log(typeof d);

4.. null

// null is a primitive dta type that very for keep the empty value of the variable.
// --> iss ka type hamesha object hi hota h
let user=null;
console.log(user)
console.log(typeof user)

// what is object?
// obj is a data structure in js
// jab kisi kebare detail mein exlain karna ho to object banakar explain karte h
let userr = {
    name:"rihan khan",
    father: "jamshaid",
    ammi:"mustafai"
};
userr.name="farru";
console.log(userr.name) 
// update the name(farru)
console.log(userr);