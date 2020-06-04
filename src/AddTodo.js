import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.content != "") {
      this.props.addTodo(this.state);
      this.setState({
        content: "",
      });
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo, Enter to submit:</label>

          <input
            type="text"
            STYLE="color: white"
            onChange={this.handleChange}
            value={this.state.content}
          ></input>
        </form>
      </div>
    );
  }
}

export default AddTodo;
