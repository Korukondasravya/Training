let input=document.getElementById("demo2");
console.log(input);

input.addEventListener("keyup",()=>{
    let res=Math.round(Math.random()*10000).toString(16);
    console.log(res);
    document.body.style.backgroundColor=`#${res}`
})

let video=video.getElementById("demo")
console.log("video");




