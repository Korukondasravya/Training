// function main(a,b){
//     console.log(a());
//     console.log(b());
 
// }
// main(function(){
//     return "I am Call back fun1"

// },function(){
//     return "iam from b call back fun1"
// }

// )
// main(function(){
//     return "I am Call back fun2"

// }
// )
function operation(task){
    let a=Number(prompt("Enter a value"))
    let b=Number(prompt("Enter b value"))
    let c=Number(prompt("Enter c value"))

    console.log(task());
    

}
operation(function(a,b,c){
    return a+b+c;
})
operation(function(a,b,c){
    return a-b-c;
})
operation(function(a,b,c){
    return a*b*c;
})
// operation(function(a,b){
//     return a//b;
// })
