document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');
        listItem.className = 'flex justify-between items-center p-2 bg-white-smoke rounded';
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="bg-electric-blue text-white p-1 rounded remove-btn">Remove</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
        listItem.querySelector('.remove-btn').addEventListener('click', function() {
            taskList.removeChild(listItem);
        });
    }
});
