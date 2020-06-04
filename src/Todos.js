import React from "react";

const Todos = ({ todos, deleteTodos }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => deleteTodos(todo.id)}>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center mt-10">You have no todo's !</p>
  );
  return <div class="todos collection">{todoList}</div>;
};

export default Todos;
