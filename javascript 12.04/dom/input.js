const input = document.querySelector("#myInput");
const addButton = document.querySelector("#myButton");
const tasksDiv = document.querySelector("#tasks");

const tasks = [];

const createElement = (text) => {
  const element = `<li>${text}</li>`;
  return element;
};

const render = () => {
  let tasksHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const element = createElement(tasks[i]);
    tasksHTML += element;
  }
  tasksDiv.innerHTML = tasksHTML;
};
render();

const getValue = () => {
  const value = input.value;
  tasks.push(value);
  render();
  input.value = "";
};

render();

addButton.onclick = getValue;
