import { useEffect, useState } from "react";
import { API_URL } from "../api/api";

export const useTodos = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [notDoneTodos, setNotDoneTodos] = useState([]);

  const loadTodos = () => {
    fetch(API_URL + `api`)
      .then((response) => response.json())
      .then((data) => {
        setAllTodos(data);  
        const done = data.filter((todo) => todo.isCompleted);
        const notDone = data.filter((todo) => !todo.isCompleted);
        setDoneTodos(done);
        setNotDoneTodos(notDone);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  const createTodo = (todo) => {
    fetch(API_URL + "api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        text: todo,
        isCompleted: false,
      }),
    }).then(() => loadTodos());
  };

  const editTodo = (todoId, todoText) => {
    return fetch(API_URL + `api/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ text: todoText }),
    }).then(() => loadTodos());
  };

  const deleteTodo = (todoId) => {
    fetch(API_URL + `api/${todoId}`, {
      method: "DELETE",
    }).then(() => loadTodos());
  };

  const checkBox = (todoId, completed) => {
    fetch(API_URL + `api/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ isCompleted: completed }),
    }).then(() => loadTodos());
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return [
    { allTodos, doneTodos, notDoneTodos },
    { createTodo, editTodo, loadTodos, deleteTodo, checkBox },
  ];
};
