let btn = document.querySelector("#btn");
let colorCode = document.querySelector("#colorCode");
let mainList = document.querySelector(".main_list");
let value = [];

let changeColor = () => {
    let hexColorCode = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + hexColorCode[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    colorCode.textContent = `${color}`;
    value.push(color);
    // console.log(value);
    localStorage.setItem("color", color);

}
let getColorFromLocalStorage = () => {
    let storedColor = localStorage.getItem('color');
    if (storedColor) {
        document.body.style.backgroundColor = storedColor;
        colorCode.textContent = storedColor;
        value.push(storedColor);
    }
}

btn.addEventListener("click", changeColor);
window.addEventListener("load", getColorFromLocalStorage);