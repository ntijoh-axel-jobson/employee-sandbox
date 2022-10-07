async function index() {
    const res = await fetch('/api/employees');
    const employees = await res.json();
 
    const ul = document.querySelector('.dataList');

    ul.addEventListener('deleteEmployeeEvent', (e) => {
        ul.removeChild(e.target);
    });

    employees.forEach(employee => {
        ul.appendChild(new EmployeeListItem(employee))
    });
}

async function showEmployeeData() {
    
}