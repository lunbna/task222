// let counter = 0;
// let counterDisplay = document.getElementById("counter");
// function Count(){
//     counter += 1; 
//     counterDisplay.innerHTML = counter;
// }

//Calc
let screen = document.getElementById("screen");
let screens = document.getElementById("screens");
let inner = document.querySelector(".inner");
let newInput = false;
function displayScreen(opt){
    if (newInput) {
        screen.value = "";
        newInput = false;
    }
    screen.value += opt;

}

function clearScreen(){
    screen.value = "";
}



function calcResult() {
    try {
        let expression = screen.value;
        let result = eval(expression);
        screen.value = result;

        // إضافة العملية الحسابية إلى عنصر inner
        let operation = document.createElement("div");
        operation.textContent =`${expression} = ${result}`;
        inner.appendChild(operation);
        newInput = true;
        
    } catch (error) {
        screen.value = "Error";
        newInput = true;
    }
    
}
