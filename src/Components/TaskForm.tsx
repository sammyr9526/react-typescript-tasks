import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/task";

interface props {
  newAddTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initalstate = {
  title: "",
  description: "",
};

export default function TaskForm({ newAddTask }: props) {
  const [task, setTask] = useState(initalstate);
  const inputTitle = useRef<HTMLInputElement>(null);

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newAddTask(task);
    setTask(initalstate);
    inputTitle.current?.focus();
  };
  return (
    <div className="card card-body bg-secondary text-dark">
      <h1> Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.title}
          autoFocus
          ref={inputTitle}
        />

        <textarea
          name="description"
          rows={2}
          className="form-control mb-3 shadow-none border"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>

        <button className="btn btn-primary">
          Save
          <span>
            <AiOutlinePlus />
          </span>
        </button>
      </form>
    </div>
  );
}
