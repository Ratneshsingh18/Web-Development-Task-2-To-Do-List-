function addTask() {
    const taskInput = document.getElementById('task-input').value;
    const priorityInput = document.getElementById('priority-input').value;
    const dueDateInput = document.getElementById('due-date-input').value;
    const categoryInput = document.getElementById('category-input').value;

    if (taskInput === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.innerText = `${taskInput} [${categoryInput}] - ${priorityInput} - Due: ${dueDateInput}`;
    taskItem.appendChild(taskText);

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.onclick = () => {
        taskItem.classList.toggle('complete');
    };
    taskItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => {
        taskList.removeChild(taskItem);
    };
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    document.getElementById('task-input').value = '';
    document.getElementById('priority-input').value = 'low';
    document.getElementById('due-date-input').value = '';
    document.getElementById('category-input').value = '';
}
