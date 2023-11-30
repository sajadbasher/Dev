let expenses = [];

function addExpense() {
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!description || !date || !category || isNaN(amount)) {
        alert('Bitte füllen Sie alle Felder korrekt aus.');
        return;
    }

    const expense = {
        description,
        date,
        category,
        amount,
    };

    expenses.push(expense);
    updateExpenseList();
}

function updateExpenseList() {
    const tableBody = document.getElementById('addExpenseButton').addEventListener('click', addExpense);

    const balanceSpan = document.getElementById('balance');

    // Clear previous entries
    tableBody.innerHTML = '';

    // Populate the table
    let totalAmount = 0;
    expenses.forEach(expense => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = expense.description;
        row.insertCell(1).innerText = expense.date;
        row.insertCell(2).innerText = expense.category;
        row.insertCell(3).innerText = expense.amount.toFixed(2);
        totalAmount += expense.amount;
    });

    // Update balance
    balanceSpan.innerText = totalAmount.toFixed(2);
}

// Initial update
updateExpenseList();
