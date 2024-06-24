const tasks = [
  { title: 'Comprar comida para o gato', type: 'urgent' },
  { title: 'Consertar Computador', type: 'important' },
  { title: 'Beber água', type: 'normal' }
];

function createTaskItem(task, index) {
  const li = document.createElement('li');
  li.classList.add('task__item');

  const div = document.createElement('div');
  div.classList.add('task-info__container');

  const span = document.createElement('span');
  span.classList.add('task-type');
  if (task.type === 'urgent') {
    span.classList.add('span-urgent');
  } else if (task.type === 'important') {
    span.classList.add('span-important');
  } else if (task.type === 'normal') {
    span.classList.add('span-normal');
  }

  const p = document.createElement('p');
  p.textContent = task.title;

  const button = document.createElement('button');
  button.classList.add('task__button--remove-task');
  button.addEventListener('click', () => {
    tasks.splice(index, 1);
    renderElements(tasks);
  });

  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(button);

  return li;
}

function renderElements(tasks) {
  const taskList = document.querySelector('.tasks__list');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = createTaskItem(task, index);
    taskList.appendChild(taskItem);
  });
}

document.getElementById('add_task_button').addEventListener('click', () => {
  const titleInput = document.getElementById('input_title');
  const typeInput = document.getElementById('input_type');
  const newTask = {
    title: titleInput.value,
    type: typeInput.value
  };

  if (newTask.title && newTask.type) {
    tasks.push(newTask);
    renderElements(tasks);
    titleInput.value = '';
    typeInput.value = '';
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});

renderElements(tasks);
