var text = document.getElementById("in-text");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    var inpt = document.getElementById("inpt");
    var inptValue = inpt.value;

    var out = document.createElement("div");
    text.appendChild(out);
    out.innerHTML = inptValue;
    out.classList.add("out");


})