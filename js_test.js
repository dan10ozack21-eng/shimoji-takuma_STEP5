let listCount = 0;

function textCheck() {
    const inputField = document.getElementById('inputText');
    const displayArea = document.getElementById('displayArea');
    const inputText = inputField.value;
    const tableBody = document.querySelector('#targetTable tbody');
    const displayButton = document.querySelector('button[onclick="textCheck()"]');

    if (inputText.trim() === "") {
        alert("入力欄が空です！何か入力してください！");
        displayArea.innerText = "入力されていません";
        displayArea.style.color = "red";
    } else {
        displayArea.innerText = "入力された内容：" + inputText;
        displayArea.style.color = "black";

        listCount++;

        const newRow = document.createElement('tr');
        const textCell = document.createElement('td');
        textCell.innerText = inputText;

        const actionCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "削除";

        deleteBtn.onclick = function() {
            newRow.remove();
            listCount--;

            if (listCount < 3) {
                displayButton.style.display = "inline-block";
            }
        };

        actionCell.appendChild(deleteBtn);
        newRow.appendChild(textCell);
        newRow.appendChild(actionCell);
        tableBody.appendChild(newRow);

        if (tableBody.rows.length > 3) {
            tableBody.deleteRow(0);
            listCount = 3;
        }

        if (listCount >= 3) {
            displayButton.style.display = "none";
        }
    }
    
    inputField.value = "";
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