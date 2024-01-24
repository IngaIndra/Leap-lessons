const tasks = [];
const tasksDiv = document.getElementById("tasks");
const addBtn = document.getElementById("addBtn");

const createElement = (text) => {
  let element = `<li>${text}</li>`;
  return element;
};

const render = () => {
  let tasksHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const elem = createElement(tasks[i]);
    tasksHTML += elem;
  }
  tasksDiv.innerHTML = tasksHTML;
};

const getValue = () => {
  const value = prompt("Enter a task: ");
  if (value) {
    tasks.push(value);
    render();
  }
};

render();
getValue();
