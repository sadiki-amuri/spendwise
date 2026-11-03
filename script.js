
let budget = parseFloat(localStorage.getItem('spendwise_budget')) || 0;
let expenses = JSON.parse(localStorage.getItem('spendwise_expenses')) || [];

const budgetForm = document.getElementById('budget-form');
const budgetInput = document.getElementById('budget-input');
const expenseForm = document.getElementById('expense-form');
const expenseTitle = document.getElementById('expense-title');
const expenseAmount = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');

const totalBudgetDisplay = document.getElementById('total-budget');
const totalExpensesDisplay = document.getElementById('total-expenses');
const currentBalanceDisplay = document.getElementById('current-balance');

function updateDashboardSummary() {
    
    const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
    const currentBalance = budget - totalExpenses;

    
    totalBudgetDisplay.textContent = `$${budget.toFixed(2)}`;
    totalExpensesDisplay.textContent = `$${totalExpenses.toFixed(2)}`;
    currentBalanceDisplay.textContent = `$${currentBalance.toFixed(2)}`;

    
    if (currentBalance < 0) {
        currentBalanceDisplay.style.color = '#e74c3c'; 
    } else {
        currentBalanceDisplay.style.color = '#2ecc71';
    }

    
    localStorage.setItem('spendwise_budget', budget);
    localStorage.setItem('spendwise_expenses', JSON.stringify(expenses));
    
    renderExpenseRecordsTable();
}

 
function renderExpenseRecordsTable() {
    expenseList.innerHTML = '';
    
    if (expenses.length === 0) {
        expenseList.innerHTML = `<tr><td colspan="3" style="text-align:center; color:#718096;">No expense items recorded yet.</td></tr>`;
        return;
    }

    expenses.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${escapeHTML(item.title)}</td>
            <td>$${item.amount.toFixed(2)}</td>
            <td><button class="btn btn-danger" onclick="deleteExpenseEntry('${item.id}')">Delete</button></td>
        `;
        expenseList.appendChild(row);
    });
}

budgetForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const value = parseFloat(budgetInput.value);
    if (!isNaN(value) && value >= 0) {
        budget = value;
        updateDashboardSummary();
        budgetInput.value = '';
    }
});

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const titleText = expenseTitle.value.trim();
    const amountVal = parseFloat(expenseAmount.value);

    if (titleText && !isNaN(amountVal) && amountVal > 0) {
        const newExpense = {
            id: Date.now().toString(),
            title: titleText,
            amount: amountVal
        };
        expenses.push(newExpense);
        updateDashboardSummary();
        
        
        expenseTitle.value = '';
        expenseAmount.value = '';
    }
});


window.deleteExpenseEntry = function(id) {
    expenses = expenses.filter(entry => entry.id !== id);
    updateDashboardSummary();
};


function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}


document.addEventListener('DOMContentLoaded', () => {
    updateDashboardSummary();
});
