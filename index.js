var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var inpVal = document.querySelector(".searchBox")
var output = document.querySelector(".result")
var search = document.querySelector(".btn")
var resultFrom;
var resultTo;
var searchVal1;
var searchVal2;

function getDate() {
    var time;
    var today = new Date()
    var options = {
        weekday: "short",
        day: "numeric",
        month: "short"
    }
    time = today.toLocaleDateString("en-US", options)

    return document.getElementById("time").innerHTML = time
}
getDate()

fromCurrecy.addEventListener("change", function(e) {
    resultFrom = e.target.value
})

toCurrecy.addEventListener("change", function(e) {
    resultTo = e.target.value
})

inpVal.addEventListener("input", function(e) {
    searchVal1 = e.target.value
})

search.addEventListener("click", calculate)

function calculate(valFrom, valTo,amount) {
    amount = searchVal1
    valFrom = resultFrom
    valTo = resultTo
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${amount}&from=${valFrom}&to=${valTo}`)
    .then((response) => response.json()) 
  .then((user) => {
    let result = Object.values(user.rates); 
    output.innerHTML = result
  });
}