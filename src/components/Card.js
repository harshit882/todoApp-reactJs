import React, { useState } from "react";
import "../css/card.css";
export default function Card(props) {
  function handelEdit() {}
  function delete_card() {
    // props.toDoList.remove((currEle.id )
  }
  return (
    props.count !== 0 && (
      <div className="container mt-3 mb-4 Card">
        <h1 className="container">Total Tasks Listed : {props.count}</h1>
        <div className="row">
          <div className="col-sm-3 mb-3 mb-sm-0">
            {props.toDoList.map((currEle) => {
              return (
                <div key={currEle.id}>
                  <div className="card border-0">
                    <div className="card-body rounded shadow p-3 mb-5 bg-body-tertiary rounded ">
                      <h3 className="card-title mb-3 text-info">
                        {currEle.titleName}
                      </h3>
                      <h5 className="card-text mb-4">{currEle.task}</h5>
                      {/* <a href="#" className="btn btn-info" onClick={handelEdit}>Edit</a> */}
                      <a
                        href="#"
                        className="btn btn-info "
                        onClick={delete_card}
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
}
