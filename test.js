document.getElementById("button").onclick = function() {
    document.getElementById("para").innerHTML = "virus";
    document.getElementById("button").style.display = "none";
}

function funcClick() {
    var x = document.getElementById("gae");

    x.innerHTML = Date();
}