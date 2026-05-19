// get element id
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
header.addEventListener("click", () => {

const content = header.nextElementSibling;

content.style.display =
content.style.display === "block" ? "none" : "block";

});
});
const btn = document.getElementById("topBtn");

window.onscroll = function(){
if(document.documentElement.scrollTop > 200){
btn.style.display="block";
}else{
btn.style.display="none";
}
}
btn.onclick = function(){
window.scrollTo({top:0,behavior:"smooth"});
}

var header=document.getElementById("header")
console.log(header)

var categorysection=document.getElementById("category-section")
console.log(categorysection)

var categorysection=document.getElementById("category-section")
console.log(categorysection)

var container=document.getElementById("containerr")
console.log(container)

var exploresection=document.getElementById("exploresection")
console.log(header)

var footer=document.getElementById("footer")
console.log(footer)