const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const name3 = document.getElementById("name3");
const resultTxt = document.getElementById("sum");

function concatenate() {
    resultTxt.innerHTML = name1.value + " " + name2.value + " " + name3.value;
}

function clearEntries() {
    name1.value = "";
    name2.value = ""
    name3.value = ""
    resultTxt.innerHTML = "";
}