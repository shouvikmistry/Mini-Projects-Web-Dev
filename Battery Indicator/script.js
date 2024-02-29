let percentage = document.querySelector(".level");
let percent = document.querySelector(".percent");

navigator.getBattery().then(function (battery) {
    updateBattery(battery);
});

function updateBattery(battery) {
    percentage.style.width = battery.level * 100 + "%";
    percent.innerHTML = Math.floor(battery.level * 100) + "%";
}
