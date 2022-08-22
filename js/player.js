const playerArray = [];

// created this function for selected player display with table

/*------------
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
-------------*/

function display(playerName) {
    const olList = document.getElementById('selected');
    if (playerArray.length > 5) {
        swal("You can not add more than five players")
        return;
    }
    olList.innerHTML = "";
    for (let i = 0; i < playerName.length; i++) {
        const name = playerName[i].playerName;

        const ol = document.createElement("ol");

        ol.innerHTML = `
        <li>${i + 1}. ${name}</li>
        `;

        olList.appendChild(ol);
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
    const perPlayer = getElementValueById('per-player-field');

    // const players = document.getElementById('selected-five');
    const players = document.getElementById('selected');
    const player = players.children.length;

    if (isNaN(perPlayer)) {
        swal("Please give amount in numbers");
        return;
    }
    const cost = player * perPlayer;
    setTextValueById('player-expenses', cost);
})

document.getElementById('btn-total-calculate').addEventListener('click', function () {
    const managerCost = getElementValueById('manager-field');
    const coachCost = getElementValueById('coach-field');
    if (isNaN(managerCost) || isNaN(coachCost)) {
        swal("Please give amount in numbers");
        return;
    }
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const totalPlayerExpenses = parseInt(playerExpensesString);

    const totalAmount = totalPlayerExpenses + managerCost + coachCost;

    setTextValueById('total-amount', totalAmount);
})