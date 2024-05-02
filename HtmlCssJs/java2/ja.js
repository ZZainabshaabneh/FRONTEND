// document.links[0].onmouseenter=function(event){
//      console.log(event);
//     event.preventDefualt();
   
// };
// let inpus=document.querySelector("[name='username']");
// let inp=document.querySelector("[name='password']");

// document.forms[0].onsubmit=function(e){
//     let us=false;
//     let pass=false;
//     if(us ==false || pass==false){
//         e.preventDefualt();
//     }
//     if(inp.value !="" && inp.value.length<=10){
//         pass==true;
//     }
//     if(inpus.value !=""){
//         us=true;
//     }
// };

// //click,foucs,blur by simulation
// let two =document.querySelector(".two");

// let one =document.querySelector(".one");
// window.onload=function(){
//     two.focus();
// }
// one.onblur=function(){//when i get out from the first filed the system atuo go to google
//     document.links[0].click();
// }

// //class list 
// let el=document.getElementById("my-div");
// console.log(el.classList);
// console.log(typeof el.classList);
// console.log(el.classList.contains("zainab"));
// console.log(el.classList.contains("onee"));//check if the class name the same or not 
// console.log(el.classList.item("1"));//each index text what is the class name
// el.onclick = function(){
//     el.classList.add("add-one","add-two");//add on class name
//     el.classList.remove("onee" );//remove class name
//     el.classList.toggle("os");//if exist it will remove else add 

// };
// el.style.color="green";
// el.style.background="black";
// el.style.fontWeight="bold";
// //or i can put all the proparities in one text
// el.style.cssText=" background : yellow; color: red; "
// //if i want remove proparity 
// el.style.removeProperty("background");
// //if i want set new  proparity 
// el.style.setProperty("background", "green");
// let cp=document.createElement("p");
// let cpt=document.createTextNode("this cores depends on java and rules of coding");
// //if i wanna put txt befor div
// el.before("like this befor");
// //if i wanna put txt after div
// el.after("like this after");
// el.after(cp);
// //add after text 
// el.append("  welcome to js after");
// //add befor text 
// el.prepend(" befor welcome to js ");
// el.prepend(cp);

// //el.remove();//to delete the div

// //lesson98
// let span=document.querySelector(".lmy");
// console.log(span.nextSibling);//to show the next thing of class span
// console.log(span.nextElementSibling);//to show the next code of class span
// console.log(span.nextElementSibling.remove());//to remove the line code
// console.log(span.previousElementSibling);//to get the previous line  
// console.log(span.parentElement);//to get the parent code consist of all these  
// // span.onclick=function(){
// //     span.parentElement.remove();
// // }
// //lesson99
let myp=document.querySelector("p") ;//to get copy value 
let mydiv=document.querySelector("my-div");
//mydiv.appendChild(myp);
myp.onclick=one;
myp.onclick=two;
// myp.onclick = function (){
//     console.log("first message from function");
// };
function one(){
    console.log("finally done by function one ");
};
function two(){
    console.log("finally done by function one ");
}
 myp.addEventListener("click",function(){
    console.log("finally done by function addevent ");

 });
 //or this method 
 myp.addEventListener("click",one);

 //if i click on paragraph then copy of it 
 myp.onclick=function(){
    let newp=myp.cloneNode(true);
    newp.className="clone p";//to notice the new paragraph
    document.body.appendChild(newp);
 }
 //////////////////very important 
 document.addEventListener("click",function(e){
    if(e.target.className==="clone p"){
        console.log("this paragraph cloned !");
    }
 });
//try to solve video 101********************
//BOM Browser Object Model 

//alert 
// alert("not secure !");
// console.log("tooooooooooot");
// let con=confirm("are you sure ?");
// console.log(con);
// if(con==true){
//     console.log("item deleted");
// }
// else{
//     console.log("item not deleted");
// }
//print the thing that user write 
// let pro=prompt("good day for you ?","write three character ");
// console.log(pro);
// setTimeout(() => {
//     console.log("msg")
// }, 2000);
// //or other method 
// setTimeout(saymsg,4000,"zainab",23);
// function saymsg(user, age){
//     console.log(`after 4 sec ${user} his age is ${age}`);
// }

//clear time out stoped the time 
// let s=setTimeout(saymsg,4000,"zainab",23);
// function saymsg(user, age){
//     console.log(`after 4 sec ${user} his age is ${age}`);
// }

// //clear time out stoped the time 
// let btn=document.querySelector("button");
// btn.onclick = function(){
//     clearTimeout(s);
// };

//set interval call every sec
// setInterval(function(){
//     console.log("hello set interval ")
// },2000);

// let conter=setInterval(count,2000);
// let div=document.querySelector("div");
// function count(){
//     div.innerHTML-=1;
//     if(div.innerHTML==="0"){
//         clearInterval(counter);
//     }

// };


console.log(location);
console.log(location.href)
//location.href="https://elzero.org/study/javascript-bootcamp-2021-study-plan/";
//location.href="/#sec02";
// console.log(location.host);
// console.log(location.hostname);
//console.log(location.protocol);
//location.reload();
//location.replace("http://google.com");
//open ,close 
// setTimeout(function(){
//     window.open("https://google.com","_blank","width=400,height=500,left=120,top=130");
// },2000);

console.log(history);
let mynw=window.open("https://google.com","_blank","width=400,height=500,left=120,top=130");
window.scrollTo({
    left:500,
    top:200,
    behavior:"smooth"
});
let bttn=document.querySelector("but");
window.onscroll=function(){
    if(window.scrollY >=600){
        bttn.computedStyleMap.display="block";
    }
    else{
        bttn.computedStyleMap.display="none";
    }
};
//local storage 
window.localStorage.setItem("color","green");
//or 
window.localStorage.frontweight ="blod";
window.localStorage["fontSize"]="20px";
//to get item 
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);
/////////////////
//clear all
//window.localStorage.clear();
//set color in page 
document.body.style.backgroundColor=window.localStorage.getItem("color");
//remove iterm
window.localStorage.removeItem("color");
//get key 
console.log(window.localStorage.key(1));
console.log(typeof window.localStorage);

