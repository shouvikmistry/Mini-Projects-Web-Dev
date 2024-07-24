let percentage = document.querySelector(".level");
let percent = document.querySelector(".percent");
let isCharing = document.querySelector(".image");

navigator.getBattery().then(function (battery) {
//navigator object provides information about the user's browser and device. 

//navigator.getBattery() is an asynchronous function that returns a promise. It retrieves information about the battery of the device.

//.then(function (battery) {...}) is a method that is called on the promise returned by navigator.getBattery(). It specifies a callback function that will be executed when the promise is resolved. In this case, when the battery information is successfully retrieved.

//The function (battery) {...} is an anonymous function that takes a parameter named battery. This parameter represents the battery information obtained from the resolved promise. Inside the function, you can write code to handle or utilize the battery information.
    updateBattery(battery);
});

function updateBattery(battery) {
    percentage.style.width = battery.level * 100 + "%";
    //battery.level is a property that represents the current battery level as a value between 0 and 1.

    percent.innerHTML = Math.floor(battery.level * 100) + "%";
    //Math.floor is a built-in function in JavaScript that returns the largest integer less than or equal to a given number. It effectively rounds down a floating-point number to the nearest integer.

    if (battery.charging) {
        // The battery is charging.
        isCharing.style.visibility = 'visible';
    }
}
let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", function () {
  sec.classList.toggle("dark");
});