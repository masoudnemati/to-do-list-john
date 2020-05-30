import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="flex flex-initial justify-between bg-gray-200 px-3 py-4 mb-2">
        <h6>{title}</h6>
        <div>
          <span onClick={handleEdit}>
            <i className="fas fa-pen text-green-600 mx-2 cursor-pointer" />
          </span>
          <span onClick={handleDelete}>
            <i className="fas fa-trash text-red-600 mx-1 cursor-pointer" />
          </span>
        </div>
      </li>
    );
  }
}
