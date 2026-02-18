// what is operator?

// operator is very usefull in  performs the operation on operands(variable)
// operator defines by a special symbol( -, +,*,/...)

// #types of the operators in javaScript
// 1..arithmatic operator

// 1.. plus operator
// this operator use for additionn of operands

// 2.. subtraction(minus) operator
// this operator use for subtraction  of operands

let a=10;
let b=12;

console.log("arithmatic operator")
console.log("exaple of plus(addition) operator",a+b);
console.log("example of minus(subtraction) operator",a-b);
console.log("this is example of multiply operator",a*b);
console.log("this is example of division operator",a/b);
console.log("this is the modulas(reminder) operator",a%b);
console.log("this is the exponantion operator",a ** b);
 a++
 console.log(a);
b--
console.log(b)

// Assignment operator
a1=20,b2=30
console.log("Assignment operator");
a1+=b2
console.log(a1)
a1-=b2;
console.log(a1)
a*=3;
console.log(a1)
a/=2;
console.log(a1)
a%=2;
console.log(a1)
a**=b2;
console.log(a1)

// comparision operator

// 1.. equal to operator

f=5,e=8

console.log("comparision operator")

if (f==e) {
    console.log("a equal to e")
}
else {
    console.log("not equal")
}
// 2.. not equal to operator
if (f!=e) {
    console.log("not equal")
}
else {
    console.log("not equal")
}
// 3.. greater then operator
if (f>e) {
    console.log("f is greatrt the from e")
}
else {
    console.log("f is not greater then from e")
}
// 4.. less then operator
if (f<e) {
    console.log("f is less the from e")
}
else {
    console.log("f is not less then from e")
}
// greater then equal to operator
if (f>=e) {
    console.log("f is  greater from r or a is equal to e ")
}
else {
    console.log("not equal")
}
// 6.. less then equal to operator
if (f<=e) {
    console.log("f is  lessthen from r or a is equal to e")
}
else {
    console.log("not equal")
}

// logical operator
console.log("logical operatort")
let y=9;
// 1.. logical not operator
console.log(!y)
 let o=3;
//  2.. logical or operator
 if (y==o || y==o){
    console.log("both condition is true")
 }
  else {
    console.log("not right")
}

// 3.. logical and operator
if (y==9 && y<o){
    console.log("both condition is seticefide")
}
else {
    console.log("bth condition is not ture");
}
// ternary operator part of comparision operator
let q=10, n=6;
let c= q==10 ? (q-n) : (n-q)
/* traslate in to if else conditions
    if (q==10) {
(q-n)

else (n-q)
}
 */