const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 'A', 'B', 'C', 'E', 'D', 'F'];
const colorContainer = document.querySelector('.color');
const colorInput = document.querySelector('#text-input');
const errorMsg = document.querySelector('.error');

const getRandomColor = () => {
    let color = '';
    while (color.length < 6) {
        color += arr[Math.floor(Math.random() * arr.length)]
    }
    return color;
}

const isValidColor = (color) => {
    if (color.length !== 6) {
        return false;
    }

    let isValid = true;
    color.split("").forEach(char => {
        if (!arr.includes(char)) {
            isValid = false;
        }
    });
    return isValid;
}

document.querySelector('.random-color-btn').addEventListener('click', () => {
    const color = getRandomColor();
    colorContainer.style = `background-color: #${color};`;
    colorInput.value = color;
});

colorInput.addEventListener('change', () => {
    if (isValidColor(colorInput.value)) {
        colorContainer.style = `background-color: #${colorInput.value};`;
        errorMsg.style = 'display:none;'
    } else {
        errorMsg.style = 'display:block;'
    }
})

