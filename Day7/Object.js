//Declaration way

let obj={
    name:"sravya",
    id:303,
    role:"Student",
    arr:[10,"a",20],
    Boolean:true,
    demo:function(){
        console.log("Hello");
        
    }
}

console.log(obj);
obj.demo();
console.log(obj.arr);
console.log(obj.name);

//Constructor function
//Used to create a object

function obj1(name,id){
    this.name=name;
    this.id=id;

}
let p=new obj1("Sravya",303)
console.log(p);
