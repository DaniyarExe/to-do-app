import TodoItem from "../TodoItem/TodoItem";
import CreateTodo from "../CreateTodo/CreateTodo";
import style from "./todo.module.css";
import { useTodos } from "../../hook/useTodos";

const Todo = () => {
  const [
    { allTodos, doneTodos, notDoneTodos },
    { createTodo, editTodo, loadTodos, deleteTodo, checkBox },
  ] = useTodos();
  return (
    <>
      <section className={style.todosWrapper}>
        <div className={style.blockTitle}>
          <h2>
            Todo:{allTodos.length} Done task:{doneTodos.length}  Not completed:{notDoneTodos.length}
          </h2>
        </div>
        <div className={style.todos}>
          <CreateTodo create={createTodo} />
          {allTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              checkBox={checkBox}
              loadTodos={loadTodos}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Todo;
