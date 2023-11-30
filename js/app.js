document.addEventListener('DOMContentLoaded', function() {
    // Definition der addExpense-Funktion
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

    // Andere Codeabschnitte...

    // Event-Listener für den Button hinzufügen
    document.getElementById('addExpenseButton').addEventListener('click', addExpense);
});
