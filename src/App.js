import React, { Component } from "react";
import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "react-uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/Todolist";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("handle change");
  };
  handleSubmit = (e) => {
    console.log("handle submit");
  };
  clearList = () => {
    console.log("clear list");
  };
  handleDelete = (id) => console.log(`handle delete ${id}`);
  handleEdit = (id) => console.log(`handke edit ${id}`);

  render() {
    return (
      <div className="App">
        <h1 className="text-center mt-10 text-lg">نرم افزار برنامه ریزی</h1>
        <TodoInput
          className="text-center flex items-center"
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
        />
        <TodoList
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
