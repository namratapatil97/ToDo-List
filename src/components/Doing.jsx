import React from "react";
import "./Doing.css";


const Doing = (props) => {
    return (
        <>
            <div className="doing">
                <div className="titleDoing">
                    <h3>DOING</h3>
                </div>

                {props.addnewTask !== [] ? (
                    <ul>

                        {props.addnewTask.map((t) => (

                            <div className="do">
                                <div className="Box">
                                    <button className="completed" onClick={e => props.taskCompleted(e, t.id)}></button>&nbsp;&nbsp;
                                </div>

                                <div className="list">
                                    <textarea placeholder="Add description" className={t.isCompleted ? "crossText" : "listitem"} value={t.value} onChange={e => props.handleChange(e)}></textarea>
                                </div>
                            </div>

                        ))}
                    </ul>
                ) : null}

            </div>

        </>
    );
}

export default Doing;