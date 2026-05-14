function textCheck() {
    const inputField = document.getElementById('inputText');
    const displayArea = document.getElementById('displayArea');
    const inputText = inputField.value;

    if (inputText.trim() === "") {
        alert("入力欄が空です！何か入力してください！");
        displayArea.innerText = "入力されていません";
        displayArea.style.color = "red";
    } else {
        displayArea.innerText = "入力された内容：" + inputText;
        displayArea.style.color = "black";
    }

    displayArea.classList.toggle('highlight');
}

let colorIndex = 0;

function changeColor() {
    const colors = ['lightblue', 'lightgreen', 'lightcoral'];
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
}