function date() {
    var d = new Date();
    var x = document.getElementById("date");
    var day = addZero(d.getDate());
    var month = addZero(d.getMonth());
    var year = addZero(d.getFullYear());
    x.innerHTML = day + "." + month + "." + year;

    setTimeout(date, 1000);
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

date();