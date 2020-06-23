function clock() {
    var d = new Date();
    var x = document.getElementById("clock");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    // var date = addZero(d.getDate());

    x.innerHTML = h + ":" + m + ":" + s;

    setTimeout(clock, 1000);
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

clock();