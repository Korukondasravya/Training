let a = document.createElement("h1")
console.log(a)
a.textContent = "Hello"

document.body.appendChild(a)
a.style.backgroundColor = "red"
a.style.textAlign = "center"

let ol = document.createElement("ol")
//ol.type = "A"
let li1 = document.createElement("li")
li1.textContent = "react"

let li2 = document.createElement("li")
li2.textContent = "Node.js"
ol.appendChild(li1)
ol.appendChild(li2)


let div = document.getElementById("demo")
div.appendChild(ol)

div.style.border = "5px solid red"
ol.setAttribute("type","A")

/**
 * Task:
 * 5*5 table
 * 
 */
let d=document.createElement('table')
console.log(d);
d.setAttribute("border","2 px solid red" )
document.body.appendChild(d)
let tr1=document.createElement('tr')
let tr2=document.createElement('tr')
let tr3=document.createElement('tr')
let tr4=document.createElement('tr')
let tr5=document.createElement('tr')
//console.log(c);
d.appendChild(tr1)
d.appendChild(tr2)
d.appendChild(tr3)
d.appendChild(tr4)
d.appendChild(tr5)

let td1=document.createElement('td')
td1.textContent="Node1"
let td2=document.createElement('td')
td2.textContent="Node2"
let td3=document.createElement('td')
td3.textContent="Node3"
let td4=document.createElement('td')
td4.textContent="Node4"
let td5=document.createElement('td')
td5.textContent="Node5"
tr1.appendChild(td1)
tr1.appendChild(td2)
tr1.appendChild(td3)
tr1.appendChild(td4)
tr1.appendChild(td5)
let td6=document.createElement('td')
td6.textContent="Node1"
let td7=document.createElement('td')
td7.textContent="Node2"
let td8=document.createElement('td')
td8.textContent="Node3"
let td9=document.createElement('td')
td9.textContent="Node4"
let td10=document.createElement('td')
td10.textContent="Node5"

tr2.appendChild(td6)
tr2.appendChild(td7)
tr2.appendChild(td8)
tr2.appendChild(td9)
tr2.appendChild(td10)

// tr3.appendChild(td1)
// tr3.appendChild(td2)
// tr3.appendChild(td3)
// tr3.appendChild(td4)
// tr3.appendChild(td5)

// tr4.appendChild(td1)
// tr4.appendChild(td2)
// tr4.appendChild(td3)
// tr4.appendChild(td4)
// tr4.appendChild(td5)

// tr5.appendChild(td1)
// tr5.appendChild(td2)
// tr5.appendChild(td3)
// tr5.appendChild(td4)
// tr5.appendChild(td5)





