const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");



const sumtxt = document.getElementById("sum");
const difftxt = document.getElementById("diff");
const protxt = document.getElementById("pro");
const qoutxt = document.getElementById("qou");


let sum = 0;
let difference = 0;
let product = 0;
let qoutient = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        sumtxt.innerHTML = sum;

        difference = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        difftxt.innerHTML = difference;

        product = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        protxt.innerHTML = product;

        qoutient = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        qoutxt.innerHTML = qoutient;
    }

    }
    


function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""


    sumtxt.innerHTML = "";
    difftxt.innerHTML = "";
    protxt.innerHTML = ""; 
    qoutxt.innerHTML = "";

    sum = 0;
    difference = 0;
    product = 0;
    qoutient = 0;

}

