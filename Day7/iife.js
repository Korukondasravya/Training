(
    function(){
        console.log("I am from iife anonymous")
    }
)();

((a,b)=>{
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);

})(2,3);

(
    function demo(){
        console.log('I am from iife Declaration')
    }
)()