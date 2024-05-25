 
let hoverx= document.querySelector(".card-total")
let card = document.querySelector(".card_item")


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