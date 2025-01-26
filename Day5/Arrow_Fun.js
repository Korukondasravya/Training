//Ecma section -6 is used in Arrow function
//Used to reduce the code
//2 types:implicit,explicit
//implicit no need of any return keyword
// function ex(){
//     console.log("hie");
    
// }
// let a=() => console.log("Hie");
// a()
//In the explicit we need to use the return function
// let a=()=>{return "Hello explicit"}
// console.log(a());
let a=(task) => {
    console.log(task(10,10))
}
a((b,c)=>{
    return b+c
})
a((b,c)=>{
    return b-c
})
