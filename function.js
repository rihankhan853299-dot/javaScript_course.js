function add(a,b){
    return a+b
}

result1=add(4,6);
result2=add(2,6);
result3=add(3,6);

console.log("SUM OF THE NUMBERS",result1);
console.log("SUM OF THE NUMBERS",result2);
console.log("SUM OF THE NUMBERS",result3);

function nam(){
    console.log("hello guru g")
}

nam();

// defoult function value

function addition(a,b,g=2){
return a+b+g;

}
result=addition(6,2);
console.log(result);

// Arrow function

const add1=(a,b)=>{
    return a+b;
}
result=add1(5,6);
console.log(result);