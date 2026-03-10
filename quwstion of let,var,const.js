var f=9;

{
    var f=7;
}
console.log(f); // output=7

// Question..2

let u=89;

{

    let u=3; // u ka Scope block tak hi h
    console.log(u) // output=3
}
 console.log(u) //output=89 
{
    const c=7;
    console.log(c);
}

console.log(c) // cannot acceess variable c outside the block
const h=5;
 console.log(h); 