let btn = document.querySelector("button");
let ul=document.querySelector("ul");
let inp =document.querySelector("input");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let del = document.createElement("button");
    del.innerText="delete";
    del.classList.add("delete");
    item.appendChild(del);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let lis=event.target.parentElement;
        lis.remove();
        console.log("deleted");  
    }
});