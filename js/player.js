const playerArray = [];

function display(playerName) {
    const tableBody = document.getElementById('selected-five');
    if (playerArray.length > 5) {
        alert("You can not add more than five players");
        return;
    }
    tableBody.innerHTML = "";
    for (let i = 0; i < playerName.length; i++) {
        const name = playerName[i].playerName;

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <th>${i + 1}</th>
        <th>${name}</th>
        `;

        tableBody.appendChild(tr);
    }

}
function addToSelected(element) {
    element.disabled = true;
    element.style.backgroundColor = "grey";
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        playerName: playerName
    }

    playerArray.push(playerObj);

    display(playerArray);


}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const totalPlayer = 5;
    const perPlayer = getElementValueById('per-player-field');
    if (isNaN(perPlayer)) {
        alert("Please give amount in numbers");
        return;
    }
    const cost = totalPlayer * perPlayer;
    setTextValueById('player-expenses', cost);
})

document.getElementById('btn-total-calculate').addEventListener('click', function () {
    const managerCost = getElementValueById('manager-field');
    const coachCost = getElementValueById('coach-field');
    if (isNaN(managerCost) || isNaN(coachCost)) {
        alert("Please give amount in numbers");
        return;
    }
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const totalPlayerExpenses = parseInt(playerExpensesString);

    const totalAmount = totalPlayerExpenses + managerCost + coachCost;

    setTextValueById('total-amount', totalAmount);
})