function changeColor(color) {
    document.body.style.background = color;
}

function run1() {
    changeColor("radial-gradient(circle, rgba(255,247,65,0.31416316526610644) 0%, rgba(233,148,233,0.6110819327731092)");
    el_down.innerHTML = "Background Color changed";
}

function run2() {
    changeColor("radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)");
    el_down.innerHTML = "Background Color changed";
}

function run3() {
    changeColor("radial-gradient(circle, rgba(251,63,212,0.5102415966386555) 0%, rgba(70,236,252,0.5522584033613445) 100%)");
    el_down.innerHTML = "Background Color changed";
}

function run4() {
    changeColor("linear-gradient(0deg, rgba(34,193,195,0.25253851540616246) 0%, rgba(45,245,253,0.49343487394957986)");
    el_down.innerHTML = "Background Color changed";
}