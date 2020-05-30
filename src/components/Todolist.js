import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class Todolist extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div className="w-full max-w-md mx-auto">
        <ul>
          <h2 className="text-right mt-16 mb-6">فهرست کارهای من</h2>
          {items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
          <button
            type="button"
            className=" bg-gray-200 p-2 rounded border-2 mt-10 text-black hover:bg-red-700 hover:text-white"
            onClick={clearList}
          >
            پاک کردن تمامی فهرست
          </button>
        </ul>
      </div>
    );
  }
}
