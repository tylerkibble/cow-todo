let taskCount = 0;

function addTodo() {
    console.log("clicked");
    const input = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    if (input.value.trim() !== '') {
        const newTodo = document.createElement('LI');
        
        // Create the task text element
        const taskText = document.createTextNode(input.value);
        
        // Create the remove button
        const removeButton = document.createElement('BUTTON');
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent bubbling up to li click handler
            this.parentElement.remove();
            taskCount--;
            updateTaskCountDisplay();
        });

        // Assemble the list item
        newTodo.appendChild(taskText);
        newTodo.appendChild(removeButton);

        todoList.appendChild(newTodo);

        input.value = '';
        
        // Update task count
        taskCount++;
        updateTaskCountDisplay();

        // Play cow sound effect
        const audio = new Audio('/static/moo.mp3');
        audio.play();
    }
}

// Function to update the task count display
function updateTaskCountDisplay() {
    document.getElementById('taskCount').textContent = taskCount;
}

// Initialize the task count display
updateTaskCountDisplay();

// Optional: Add functionality to mark tasks as completed
document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todoList');
    
    todoList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
            
            // If the task is marked as completed, decrement the count
            if (event.target.classList.contains('completed')) {
                taskCount--;
            } else {
                taskCount++;
            }
            
            updateTaskCountDisplay();
        }
    });
});
