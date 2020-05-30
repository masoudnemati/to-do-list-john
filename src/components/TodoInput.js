import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="w-full max-w-md mx-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="کارهایی که می خواید انجام دهید را اینجا بنویسید..."
            value={item}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                : "mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            }
          >
            {editItem ? "ویرایش" : "افزودن به فهرست"}
          </button>
        </form>
      </div>
    );
  }
}
