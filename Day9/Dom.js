console.log(typeof document);
console.log(window);
console.log(document.doctype);
console.log(document.body);
console.log(document.title);
document.title="flipkart";
console.log(document.title);
console.log(document.head);
console.log(document.h1);
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[1]);
console.log(document.links[2]);
document.links[0].href="http://www.youtube.com"
document.links[1].href="http://www.Amazon.com"
document.links[2].href="http://www.Zomato.com"


console.log(document.getElementById("h1"));
let a=document.getElementById("h1")
console.log(a.textContent);

console.log(a.textContent="Hello Sravya");
a.style.background="green"
a.style.textAlign="center"
document.links[1].style.color="red"
document.links[0].style.color="green"
document.links[2].style.color="pink"
//document.links.style.textAlign="center"

console.log(document.getElementsByTagName("img"));
b=document.getElementsByClassName("demo");
console.log(b);
b[0].style.background="blue"
let c=document.getElementsByTagName("p")
//c.style.backgroundcolor('yellow');
console.log(c[1].textContent);
c[1].style.backgroundColor="red"
c[0].style.border="5px solid red"

//console.log(c);
let d=document.getElementsByName("demo2")
console.log(d[1].textContent);
d[1].style.textAlign='center'
d[0].style.border="1px solid red"
let e=document.querySelector("#h1")
console.log(e);
let f=document.querySelectorAll("#h1")
console.log(f);
let g=document.querySelector(".demo")
console.log(g);
let h=document.querySelectorAll(".demo")
console.log(h);



/**
 * 3 methodsin indirect access
 * 1)getElementById
 * 2)getElementsByTagName
 * 3)getElementsByClassName
 * 4)getElementsByName
 * 5)querySelector
 * 6)querySelectorAll
 */
