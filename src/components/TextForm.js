import React, { useEffect, useState } from "react";
import "../css/TextForm.css";
import Card from "./Card";
export default function TextForm(props) {
  const [count, setcount] = useState(0);
  const [toDo, setToDo] = useState({
    id: "",
    titleName: "",
    task: "",
  });
  const [toDoList, setToDoList] = useState([]);
  let handelKey = () => {
    setcount(count + 1);
    // setToDo()
    setToDoList([
      ...toDoList,
      {
        id: Math.floor(Math.random() * 999) + 100,
        titleName: props.input1,
        task: props.input2,
      },
    ]);
  };

  return (
    <>
      <div className="container mt-3 text-bg-info  p-3 w-75 TextForm border rounded shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            <h2>Title</h2>
          </label>
          <input
            type="text"
            className="form-control TextForm_input"
            name="titles"
            id="exampleFormControlInput1"
            value={props.input1}
            onChange={props.handelChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h2>Task</h2>
          </label>
          <textarea
            className="form-control TextForm_input"
            id="exampleFormControlTextarea1"
            name="textarea"
            rows="3"
            value={props.input2}
            onChange={props.handelChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-info" onClick={handelKey}>
            Add
          </button>
        </div>
      </div>
      {/* <Card titleName={toDo.titleName} toDoList={toDoList} task={toDo.task} id={toDo.id} count={count}/> */}
      <Card toDoList={toDoList} count={count} />
    </>
  );
}
