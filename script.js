var light = document.getElementById("light")
var lightOnBtn = document.getElementById("lightOnBtn");

function toggleLight() {
    console.log(light)
    // Toggle opacity between 1 and 0
    if (parseInt(light.style.opacity) === 1) {
        light.style.opacity = 0;
        lightOnBtn.innerHTML = "On Light";
    } else {
        light.style.opacity = 1;
        lightOnBtn.innerHTML = "Off Light";
    }
}
