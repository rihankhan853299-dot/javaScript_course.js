/* var,let,const */


// var

/*
* var se declare karne se variable kya byhave karta h *

1..redeclare & reassign kar sakte.
2..window mei Add ho jata h var se declare kiya hua variable.

IMP 3VA POINTS OF VAR
3..function-scope variable ban jata h var se declare kiya hua variable.

---> MEAN OF FUNCTIONAL-SCOPE
agar humne kisi function k andar var ka use karke variable ko declare kya to variable ka scope function tak hi rahega aur hum us variable ko function ke bahar se access NHI kar sakte.

// PRACTICALLY

function ad(){
    var y=8;
    console.log(y);
}
    variabkle y ko function ke bahar se access nhi kar sakte h Q ki y variable ka scope function tak hi h.

4..var se declare kiya hua variable ko hum block ke bahar se access kar sakte h.
5..var se declare kiya hua variable ko hum redeclare kar sakte h.
6..var se declare kiya hua variable ko hum reassign bhi kar sakte h.

*/ 

var a=9 // declatre karna
var a=10 // declare & initialization
var a=9 // redeclare hua a variable

{
    var o=50;
}
console.log(o); // var se declare kiya hua variable O ko block ke bahar se access kar sakte h.

// let

/*
* let se variablr Declare karne se variable kya Behave karta h *

1..redeclare MHI kar sakte 

IMP
2.. block-scped variable ban jata h

*/

let b=5;
// let b=8 ye nhi kar sakte Q ki redeclaration Allow NHI h let m.

{
    let u=60;
    console.log(u);
    if (u==60) {
        
        console.log("u is 60"); // lekin yahan se access kar sakte h Q ki u block ke andar declare hua h.
    }
}
 // variable u ko carlybracket(block) ke bahar se Access NHI kar sakte yahi baat let ko block-scope keywors banati

 // const

 // const ki help se create kiye hue variabler ki value ko hum chah kar bhi change NHI kar sakte nhi run time aur nhi compile time m

 const y=7;
// let y=4; ye bhi nhi kar sakte Q ki redeclaration Allow NHI h const m.
// const se declare kiya hua variable bhi block-scope variable hota h.



// VIMP
/* 
GLOBAL SCOPE---> Kisi bhi variable ko hum global scope m declare kar sakte h. global scope m declare kiya hua variable pure program m kahi se bhi access kiya ja sakta h.

FUNCTION SCOPE---> function scope m declare kiya hua variable sirf usi function ke andar se access kiya ja sakta h.

BLOCK SCOPE---> block scope m declare kiya hua variable sirf usi block ke andar se access kiya ja sakta h.

CONSTANT---> constant variable ki value ko hum chah kar bhi change nhi kar sakte h.
*/

