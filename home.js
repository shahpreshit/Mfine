var counter = 0;
function showAns(x, y) {
    for (var z = 1; z <= 6; z++) {
        if (z != y) {
            var b = document.getElementById(z);
            document.getElementById("sp" + z).innerHTML = "+";
            b.style.display = "none";
        }
    }
    console.log(y);
    var a = document.getElementById(y);
    if (counter == 0) {
        a.style.display = "block";
        counter++;
        console.log(counter);
        document.getElementById("sp" + y).innerHTML = "-";
    }
    else {
        a.style.display = "none";
        counter = 0;
        console.log(counter);
        document.getElementById("sp" + y).innerHTML = "+";
    }
}