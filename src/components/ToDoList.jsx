import React, { useState } from "react";
import "./ToDoList.css";
import Task from "./Task";
import Doing from "./Doing";
import Done from "./Done";

const ToDoList = () => {

    const [inputList, setInputList] = useState();
    const [addnewTask, setAddNewTask] = useState([]);
    // console.log(inputList);

    const handleChange = (e) => {
        e.preventDefault();
        setInputList(e.target.value);
    }

    // Add new task
    const AddTask = () => {
        const taskDetails = {
            id: Math.floor(Math.random() * 1000),
            value: inputList,
            isCompleted: false,
        }
        setAddNewTask([...addnewTask, taskDetails]);
        setInputList("");
    }

    // Task Completed
    const taskCompleted = (e, id) => {
        e.preventDefault();
        //let's find index of element
        const element = addnewTask.findIndex(elem => elem.id == id);

        //copy array into new variable
        const newTaskList = [...addnewTask];

        //edit our element
        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: true,
        }

        setAddNewTask(newTaskList);

    }

    //  Delete Task
    const deleteTask = (e, id) => {
        e.preventDefault();
        setAddNewTask(addnewTask.filter((t) => t.id != id));
    }

    return (
        <>
            <div className="mainDiv">
                <div>
                    <Task addnewTask={addnewTask} handleChange={handleChange} inputList={inputList} AddTask={AddTask} taskCompleted={taskCompleted} />
                </div>

                <div>
                    <Doing addnewTask={addnewTask} handleChange={handleChange} inputList={inputList} AddTask={AddTask} taskCompleted={taskCompleted} />
                </div>

                <div>
                    <Done addnewTask={addnewTask} handleChange={handleChange} deleteTask={deleteTask} />
                </div>
            </div>

            <div className="todo">
                <div className="toBox">
                </div>
                <div className="tolist">
                    <textarea placeholder="Add description" onChange={handleChange} value={inputList}></textarea>
                </div>
            </div>

            <div className="addTask">
                <button onClick={AddTask}>Add a Task</button>
            </div>

        </>
    );
}
export default ToDoList;