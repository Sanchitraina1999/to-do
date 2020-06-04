import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [],
  };
  deleteTodos = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };
  addTodo = (newTodo) => {
    newTodo.id = Math.random();
    let todos = [...this.state.todos, newTodo];
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center pink-text mt-10">Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <label className="ml-2">Click on any Todo to delete</label>
        <Todos todos={this.state.todos} deleteTodos={this.deleteTodos} />
      </div>
    );
  }
}

export default App;
