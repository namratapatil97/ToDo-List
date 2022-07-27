import React from "react";
import "./Task.css";

const Task = (props) => {

    return (
        <>
            <div className="task">
                <div className="title">
                    <h3>TASK</h3>
                </div>

                {props.addnewTask !== [] ? (
                    <ul>

                        {props.addnewTask.map((t) => (

                            <div className="do">
                                <div className="Box">
                                </div>

                                <div className="list">
                                    <textarea placeholder="Add description" value={t.value} onChange={e => props.handleChange(e)}></textarea>
                                </div>
                            </div>

                        ))}
                    </ul>
                ) : null}

            </div>

        </>

    );

}

export default Task;