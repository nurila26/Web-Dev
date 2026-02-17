const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo(task) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.className = 'delete-btn';

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  checkbox.addEventListener('change', () => {
    li.classList.toggle('done');
  });

  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = input.value.trim();
  if (task) {
    addTodo(task);
    input.value = '';
    input.focus();
  }
});

