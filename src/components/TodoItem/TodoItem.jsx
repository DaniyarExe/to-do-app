import { useState } from "react";
import style from "./Todo-item.module.css";

const TodoItem = ({ text, isCompleted, editTodo, id, loadTodos, deleteTodo, checkBox,   }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [TodoText, setTodoText] = useState(text);
  return (
    <div className={style.todoItem}>
      <div className="todoItem">
        <input type="checkbox" defaultChecked={isCompleted} onChange={() => checkBox(id, !isCompleted)} />
        {isEditMode ? (
          <>
            <input
              type="text"
              value={TodoText}
              onChange={(event) => setTodoText(event.target.value)}
            />
            <button type="button" onClick={()=> editTodo(id, TodoText).then(()=>{
              setIsEditMode(false);
              loadTodos();
            })}>Save</button>
          </>
        ) : (
          <p>{text}</p>
        )}
      </div>
      <button onClick={() => setIsEditMode(!isEditMode)}>Edit</button>
      <button onClick={()=> deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
