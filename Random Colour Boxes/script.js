/*
const boxes = document.querySelectorAll(".box");
boxes.forEach(e => {
    let random = Math.floor(
        Math.random() * 10
    )
    switch (random) {
        case 0:
            e.style.backgroundColor = "blue";
            break;
        case 1:
            e.style.backgroundColor = "green";
            break;
        case 2:
            e.style.backgroundColor = "yellow";
            break;
        case 3:
            e.style.backgroundColor = "purple";
            break;
        case 4:
            e.style.backgroundColor = "orange";
            break;
        case 5:
            e.style.backgroundColor = "pink";
            break;
        case 6:
            e.style.backgroundColor = "brown";
            break;
        case 7:
            e.style.backgroundColor = "cyan";
            break;
        case 8:
            e.style.backgroundColor = "magenta";
            break;
        case 9:
            e.style.backgroundColor = "lime";
            break;
        default:
            e.style.backgroundColor = "blue";
            break;
    }
});
*/
const boxes = document.querySelectorAll(".box");
boxes.forEach(e => {
    e.style.backgroundColor = GetRaandom();
    e.style.color = GetRaandom();
}
)

function GetRaandom() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    return `rgb(${a},${b},${c})`;
}