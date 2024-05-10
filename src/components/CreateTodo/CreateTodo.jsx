import { useState } from "react";
import styles from "./createTodo.module.css";

const CreateTodo = ({ create }) => {
  const [todoInput, setTodoInput] = useState("");
  return (
    <div className={styles.createTodo}>
      <input
        type="text"
        placeholder="Enter your todo"
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
      />
      <button
        onClick={() => {
          create(todoInput);
          setTodoInput("");
        }}
      >
        Create
      </button>
    </div>
  )
};

export default CreateTodo;
