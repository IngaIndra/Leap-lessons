import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function loadTasks() {
    axios("http://localhost:3000/tasks").then((response) =>
      setTasks(response.data)
    );
  }

  useEffect(() => {
    loadTasks();
  }, []);

  function createNewTask() {
    if (!title || !description) {
      alert("Please enter task");
      return;
    }
    try {
      axios
        .post("http://localhost:3000/tasks/create", {
          title,
          description,
        })
        .then(() => {
          setTitle("");
          setDescription("");
          loadTasks();
        });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the new task.");
    }
  }

  function editTask() {
    console.log(title);
  }

  function deleteTask() {
    console.log(title);
  }

  const handleChangeTitle = (sdf) => {
    console.log(sdf);
    setTitle(sdf.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <main className="container mx-auto my-10 ">
      <div className="mb-3">
        <input
          type="text"
          className="mr-2 input"
          placeholder="Title"
          value={title}
          onChange={handleChangeTitle}
        />
        <input
          type="text"
          className="mr-2 input"
          placeholder="description"
          value={description}
          onChange={handleChangeDescription}
        />
        <button className="btn btn-primary" onClick={createNewTask}>
          New task
        </button>
      </div>
      {tasks.map((task) => (
        <div key={task.id} className="mb-5 shadow card bg-base-100">
          <div className="card-body">
            <div className="flex items-center">
              <div className="flex-1">{task.title}</div>
              <div className="flex-1">{task.description}</div>{" "}
              <button className="btn btn-ghost btn-sm" onClick={editTask}>
                Edit
              </button>
              <button className="btn btn-ghost btn-sm" onClick={deleteTask}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
