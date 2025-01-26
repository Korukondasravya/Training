//if
if(5>=10){
    console.log("Hie")
}
// //if-else
if(11>=10){
    console.log("Hie")
}
else{
    console.log("Bye");
    
}
//else-if-else(Ladder)
let m=100
let n=200
let o=300
if(m>=n && n>=o){
    console.log("m is largest");
    
}else if(n>=m && m>=o){
    console.log("n is largest");
    
}
else{
    console.log("o is largest");
}
//Nested if
let user="admin"
let passord=123456
if(user=='admin'){
    console.log("valid admin")
    if(passord===123456){
        console.log("valid Password")
        console.log(" Login Successful")
    

       
    }else{
        console.log("Incorrect Password")
    }
}
else{
    console.log("Login unsuccessfull");
    
}
//Switch Case
let a=2
switch(a)
{
    case 1:{
        console.log("Print 1");
        
    }
    break;
    case 2:{
        console.log("Print 2");
        
    }
    break;
    default:{
        console.log("Invalid");
        
    }
}
