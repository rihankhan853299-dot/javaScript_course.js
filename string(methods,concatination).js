let nam='good'
console.log(nam[2]);

// concatination of string

let str1 = "rihan";
let str2 = "khan";

console.log("name is " + str1 + " last name is " + str2);

// template litral 

// template litral ka use string ko concatination karne  k liye kya jata h
// template litral ka use backtick ke andar karte h $ ka bhi use hota h
let naam="rihan"

let last_name="khan";

console.log(`name is ${naam} last name is ${last_name} `);

// methods(functions) of string

// 1...length method
// -----> string ki length print karne ke liye use hota h
let name1="rihan khan";
console.log(name1.length);

// 2...toUpperCase method
// string ko UPPERCASE convert karane ke liye use hota h
let name2="rihan khan";
console.log(name2.toUpperCase());

// 3...toLowerCase method

// string ko lower case mein vconvert karane k liye Use hota h
let name3="RIHAN KHAN";
console.log(name3.toLowerCase());

// 4...slice method
/* Definiation 
slice method string ke random characters ko print karne ke liye use hota h slice method me do parameter hote h jisme se pehla parameter start index hota h aur dusra parameter end index hota h slice method me end index ko include nhi kiya jata h(balki uss se 1 pahle ki index value tak print karata h)  slice method me agar end index ko nhi diya jata hai to slice method string ke last tak print karta h
*/
let name4="rihan khan";
console.log(name4.slice(0,3)); // output: rih
console.log(name4.slice(6,10)); // output: khan

// 5...replace method
/* definition
replace method string ke kisi bhi character ko replace karne ke liye use hota h replace method me do parameter hote h jisme se pehla parameter wo character hota h jise replace karna hota h aur dusra parameter wo character hota h jise replace karna hota h
*/
let name5="rihan khan";
console.log(name5.replace("rihan","khan")); // output: khan khan

// 6...concat method
/* definition
concat method string ko concatination karne ke liye use hota h concat method me do parameter hote h jisme se pehla parameter wo string hota h jise concat karna hota h aur dusra parameter wo string hota h jise concat karna hota h
*/
let str3="rihan";
let str4="khan";
console.log(str3.concat(str4)); // output: rihan khan


/* string immutable hoti h (string ko change nhi kiya ja sakta) balki ek nayi string create hoti h */