document.getElementById("button").onclick = function (){
    window.location.href =  "https://www.google.com"
}

document.getElementById("login").onclick = function (){
    window.location.href =  "https://www.google.com"
}


const checkbox = document.getElementById("check");
checkbox.addEventListener("click", function () {
    setTimeout(function() {
        checkbox.checked = false;
    }, 4000);
});