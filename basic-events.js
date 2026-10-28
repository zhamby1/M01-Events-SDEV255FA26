//perform an event there a series of steps

//step 1 - grab the element that will cause the event....in our case the button press
const button = document.querySelector("#mybutton")

//trad way
//create an event listener that watches for an event to happen (in our case a click)
//there are many types of events (click,hover,input change, etc..) and we will cover them as we go in class
//give the event listener two values
//1. event that is raised and the html element that is doing the raising in our case the button
//2. what function is called when the event is raised

//we will use the button to hide and unhide the i am full paragraph
//syntax for event listener is html_element_grabbed.addEventListener(event,function)
// button.addEventListener("click",iamfull)

// //make the function for the event
// function iamfull(){
//     let hungry = document.querySelector("#hungry")
//     let full = document.querySelector("#full")

//     //I want to remove the hidden attribute from full and put it in hungry
//     full.removeAttribute("hidden")
//     //css way to hide
//     hungry.style.display = "none"
// }

//more modern using arrow and anon functions
button.addEventListener("click", () =>{
    let hungry = document.querySelector("#hungry")
    let full = document.querySelector("#full")

    //I want to remove the hidden attribute from full and put it in hungry
    full.removeAttribute("hidden")
    //css way to hide
    hungry.style.display = "none"

})