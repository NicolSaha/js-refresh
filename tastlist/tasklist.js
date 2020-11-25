// DEFINE UI VARIABLES

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#clear-tasks-btn');
const filter = document.querySelector('filter-tasks');
const taskInput = document.querySelector('#task');

// LOAD ALL EVENT LISTENERS
loadEventListeners();

function loadEventListeners() {
  // ADD TASK EVENT
  form.addEventListener('submit', addTask);

  // ADD TASK
  function addTask(e) {
    if (taskInput.value === '') {
      alert('Add a task');
    }

    // CREATE LI ELEMENT
    const li = document.createElement('li');
    // ADD CLASS
    li.className = 'collection-item';
    // CREATE TEXTNODE APPEND TO LI
    li.appendChild(document.createTextNode(taskInput.value));
    // CREATE LINK ELEMENT
    const link = document.createElement('a');
    // ADD CLASS
    link.className = 'delete-item secondaty-content';
    // ADD ICON HTML
    link.innerHTML = '<i class="fa fa-remove></i>';
    // APPEND LINK TO LI
    li.appendChild(link);
    taskList.appendChild(li);
    // CLEAR INPUT
    taskInput.value = '';

    e.preventDefault();
  }
}
