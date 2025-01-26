function main(a,b){
    new Promise((reslove,reject)=>{
        setTimeout(()=> {
        if(isNaN(a)|| isNaN(b)){
            return reject()
        }
        for(let i=a;i<=b;i++){
            console.log(i);
            
        } 
        return reslove()
    
    },3000)//When the asynchronous is not able to work properly then the promise will came into the picture
    
})
.then(()=>{
    console.log("It is Resolved");
    
})
.catch(()=>{
    console.log("error occured");
    
}

)
}main(1,10)
// function  simple(){
//     console.log("No's printed");
    
// }simple();

// // setInterval(()=>{
// // console.log("i am from setInterval");

// // },3000);

// // setTimeout(()=>{
// //     console.log("i am from settimeout");
    
// // },5000);

