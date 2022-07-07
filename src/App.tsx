import { useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { Task } from "./interfaces/task";
import logo from "./logo.svg";

interface AppProps {
  title?: string;
}
function App({ title }: AppProps) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn TypeScript",
      description: "Learn TypeScript",
      completed: false,
    },
  ]);

  const getCurrentTimestamp = (): number => new Date().getTime();

  const addTask = (task: Task) =>
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimestamp(), completed: false },
    ]);

  const deleteTask = (id: number) =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React Logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm newAddTask={addTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
