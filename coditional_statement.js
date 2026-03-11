/*
conditional statements condition ke base par code ko execute karne ke liye use hote hai  codition statement condion ke base par tte aur false ki tarah work karta hai  if else statement me agar condition true hoti hai to if block execute hota hai aur agar condition false hoti hai to else block execute hota hai  if else statement ke alawa bhi conditional statements hote hai jaise switch case statement

--->condition statement k bina program decision nhi le sakta h.
 */
/* TYPES OF CONDITIONAL STATEMENT */

//  1... if statement
// 2....if else  statement 
//  3...if    else if    else  statement(lader)


//  1... if statement
/* in this type allow only single condition or in this type can add single condition */
let no=50;
if (no>=50){
    console.log("your grade is A",no)
}



// 2....if else statement
/* in this type can add only two conditions */
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote."); 
    // condition is right then execute the if code body
}

else{
    console.log("you not eligable for the vot");
    // ye code tab execute hoga tab if block ki condition wrong hogi
}

//  3...if    else if    else  statement(lader)

/* in this type can add multiple condition */
let score=70;

if (score>=70){
    console.log("you are selected in neet exam");
}

else if(score>=45){

    console.log("you are selected in JEE exam",score);

}

else if (score>=30){
    console.log("you are selectyed in UPS exam",score)
}

else {
    console.log("you are not selected in any exam");
}

// nested if

let speed=20;

if (speed>80){

    console.log("this speed  is ver fast")

    if (speed<=30){
        console.log("this speed is slow");
    }
}