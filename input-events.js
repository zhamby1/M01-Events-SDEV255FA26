//grab the element(s) that is going to raise the event and display/calculate results
let message = document.querySelector("#message")
let result = document.querySelector("#result")

//typing in a input text box, we often grab an attribute that is built into the text box called value
//value represents the values that are typed inside the text box
//we want to add an event listener to grab the text while being typed and stick it in the result p element

//we add an event listener to grab data based on the user typing in a letters/numbers one at time
//each time we type something it will fire the event
//and because we of this we have to make sure that result p element is also changing each time a new letter typed in


//when we fire off events using this method, we have to have a target to store the results in
//in our case, our target will be the p-id result

//traditional way - input means the event is someone is typing in the input box
// message.addEventListener("input", updateResult)

// function updateResult(event){
//     result.textContent = event.target.value

// }

//using arrow functions
message.addEventListener("input", (event) =>{
    result.textContent = event.target.value

})

//this time we are going to utilize a button press to display or grab data
//since we are not real time rendering, we dont have to worry about a target and we using the built in onclick event in HTML
//because we are doing this, we just have to create the matching function

function displayAgeSalary(){
    //we dont have to grab the button, but we still need to grab data from our input boxes
    let age = document.querySelector("#ageInput").value
    let salary = document.querySelector("#salaryInput").value
    let display = document.querySelector("#display")

    //you can display things in a variety of ways
    //tradition concatonation or combining
    // display.textContent = "Age: " + age + " " + "Salary: " + salary

    //template literal - string that can use ${} as a way to insert js variables within a string value
    //allows you to keep the same formatting and just insert the variables where needed
    display.textContent = `My age is ${age}, and my salary is ${salary}`

    //you can also use template literals to add raw html in js to manipulate it 
    //we can change not only the text but the html layout
    // display.innerHTML = `<ul><li>Age: ${age}</li><li>Salary: ${salary}</li></ul>`

}