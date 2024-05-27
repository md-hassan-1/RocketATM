 
let hoverx= document.querySelector(".card-total")
let card = document.querySelector(".card_item")
let text = document.querySelector("#afect-add")
// let dot = document.querySelector("#dot")


hoverx.addEventListener("mouseenter", function(){
    document.querySelector("#item-1").classList.add("efect")
  
})
hoverx.addEventListener("mouseleave", function(){
    document.querySelector("#item-1").classList.remove("efect")
   
})
card.addEventListener("mouseenter", function(){
    document.querySelector("#item-1").classList.add("efect")
    
})
card.addEventListener("mouseleave", function(){
    document.querySelector("#item-1").classList.remove("efect")
  
})
text.addEventListener("mouseenter", function(){
    document.querySelector("#dot").classList.add("dots")
    console.log("everything ok")
    
})
text.addEventListener("mouseleave", function(){
    document.querySelector("#dot").classList.remove("dots")
  console.log("nothing ok")
})
