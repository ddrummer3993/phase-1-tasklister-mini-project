//build event listeners in <form>

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.querySelector('#new-task-description').value);
    form.reset();
  })
});

//create buildToD0 function

function buildToDo(task) {
  let p = document.createElement('p');
  p.textContent = `${task} `;
  taskPriority(p);

  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'X';

  p.appendChild(btn);

  document.querySelector('#tasks').appendChild(p);
}

//create handleDelete function

function handleDelete(e) {
  e.target.parentNode.remove();
}

//createtaskPriority function

function taskPriority(element) {
  priorityLevel = document.querySelector('#select-priority').value
  if (priorityLevel === "high") {
    element.style.color = 'red';
  } else if (priorityLevel === "med") {
    element.style.color = 'orange';
  }else if (priorityLevel === "low") {
    element.style.color = 'green';
  };
  return element;
};