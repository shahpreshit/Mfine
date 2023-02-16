function cImage(x) {
    var y = x.id;
    var z = document.getElementById("mainp");
    z.style.backgroundImage = "url(./images/" + y + ".jpg";
}
function showP(y) {
    var d = document.getElementById("despp");
    var e = document.getElementById("plu");
    if (e.innerHTML == "+") {
        d.style.display = "block";
        e.innerHTML = "-";
    }
    else if (e.innerHTML = "-") {
        d.style.display = "none";
        e.innerHTML = "+";
    }

}
function plus() {

    var a = document.getElementById("quantity").value;
    a++;
    document.getElementById("quantity").value = a;
}
function minus() {

    var b = document.getElementById("quantity").value;
    if (b > 0) {
        b--;
        document.getElementById("quantity").value = b;
    }
}