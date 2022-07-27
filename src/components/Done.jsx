import React from "react";
import "./Done.css";

const Done = (props) => {
    return (
        <>
            <div className="done">
                <div className="title">
                    <h3>DONE</h3>
                </div>

                {props.addnewTask !== [] ? (
                    <ul>

                        {props.addnewTask.map((t) => (

                            <div className="do">
                                <div className="delete">
                                    <button onClick={e => props.deleteTask(e, t.id)}></button>
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

export default Done;