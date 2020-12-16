/*buton de hamburguesa*/
document.addEventListener("DOMContentLoaded", page_init);
var hmbtn = null;
function page_init (){
    hmbtn = document.getElementsByClassName("hmbbttn")[0];
    navElm = document.querySelectorAll("header nav")[0];
    hmbtn.addEventListener("click", hmbtn_click);
}

function hmbtn_click(e){
    e.preventDefault();
    e.stopPropagation();
    navElm.classList.toggle("open");
}