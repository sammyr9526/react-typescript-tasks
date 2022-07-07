import { Task } from "../interfaces/task";

interface props {
  task: Task;
  deleteTask: (id: number) => void;
}

export default function TaskCard({ task, deleteTask }: props) {
  return (
    <div className=" card card-body bg-secondary rounded-0 text-dark text-center">
      <h2> {task.title}</h2>
      <p>id :{task.id}</p>
      <p>{task.description}</p>
      <button
        className="btn btn-danger"
        onClick={() => task.id && deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}
