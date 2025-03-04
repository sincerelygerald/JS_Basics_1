const num = documnet.getElementById('num');
const elementTxt = document.getElementById("elements");
let sumTxt = document.getElementById("sum");
let highestTxt = document.getElementById("high");
let lowestTxt = document.getElementById("low");
const insertTxt = document.getElementById("insert")
const deleteTxt = document.getElementById("delete")

let array = [];


insertTxt.onclick = function() {

    let num = parseInt(numInput.value);
    if(num == num ) {
        array.push(num);
        updateDisplay();
    }
}

deleteTxt.onclick = function() {
    array = [];
    updateDisplay();

}

function updateDisplay() {

    elementTxt.innerHTML=""
    sum.innerHTML = "" 
    highTxt.innerHTML = ""
    lowTxt.innerHTML = ""
}

    if(array.length > 0) {
        elementTxt.innerHTML = ""
        let sum = 0;
        let highest = array(0);
        let lowest = array(0);
            
    }

for(let i=0; i<arr.length; i++ ) {
    sum += arr[i];
    if (array[i] > highest) highest = array[i];
    if (array[i] < lowest) lowest = array[i];
    elementTxt.innerHTML += array[i] + "<br>"

}
{
sum.innerHTML = sum;
highTxt.innerHTML = highest;
lowTxt.innerHTML = lowest;

}
