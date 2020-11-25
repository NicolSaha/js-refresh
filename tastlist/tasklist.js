// DEFINE UI VARIABLES
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#clear-tasks-btn');
const filTasks = document.querySelector('#filter-tasks');
const taskInput = document.querySelector('#task');

// LOAD ALL EVENT LISTENERS
loadEventListeners();

function loadEventListeners() {
  // DOM LOAD EVENT
  document.addEventListener('DOMContentLoaded', getTasks);
  // ADD TASK EVENT
  form.addEventListener('submit', addTask);
  // REMOVE TASK EVENT
  taskList.addEventListener('click', removeTask);
  // CLEAR TASK EVENT
  clearBtn.addEventListener('click', clearTasks);
  // FILTER TASKS EVENT
  filTasks.addEventListener('keyup', filterTasks);
}

// GET TASKS FROM LS
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function (task) {
    // CREATE LI ELEMENT
    const li = document.createElement('li');
    // ADD CLASS
    li.className = 'collection-item';
    // CREATE TEXTNODE APPEND TO LI
    li.appendChild(document.createTextNode(task));
    // CREATE LINK ELEMENT
    const link = document.createElement('a');
    // ADD CLASS
    link.className = 'delete-item secondary-content';
    // ADD ICON HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // APPEND LINK TO LI
    li.appendChild(link);
    // APPEND LI TO UL
    taskList.appendChild(li);
  });
}

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
  link.className = 'delete-item secondary-content';
  // ADD ICON HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // APPEND LINK TO LI
  li.appendChild(link);
  // APPEND LI TO UL
  taskList.appendChild(li);
  // LOCAL STORAGE
  storeTaskInLocalStorage(taskInput.value);
  // CLEAR INPUT
  taskInput.value = '';

  e.preventDefault();
}

// LOCAL STORAGE
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// REMOVE TASK
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      // REMOVE FROM LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// REMOVE FROM LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// CLEAR TASKS
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // CLEAR TASKS LS
  clearTasksFromLocalStorage();
}

// CLEAR TASKS LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// FILTER TASKS
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
