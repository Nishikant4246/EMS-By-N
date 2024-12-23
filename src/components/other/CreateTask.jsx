import React, { useState, useContext } from "react"; // Import useContext
import NewTask from "../TaskList/NewTask";
import CompletedTask from "../TaskList/CompleteTask";
import { getLocalStorage } from "../../utils/localStorage";
import { AuthContext } from "../../context/AuthProvider"; // Ensure AuthContext is correctly imported

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext); // Use context to get user data

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const [task, setTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Ohh!, Task Created");
    
        // Instead of using NewTask, use the task structure you want to create
        const newTask = { taskTitle, taskDescription, taskDate, assignTo, category, active: false, NewTask: true, failed: true, Completed: false };
        
        console.log(newTask); // You can log newTask instead of task directly to verify its structure
    
        // Find the employee and assign the task
        const data = userData.employees;
        
        data.forEach(function (elem) {
            if (assignTo === elem.firstName) {
                console.log("Check for data", elem);
    
                // Ensure taskCounts is initialized
                if (!elem.taskCounts) {
                    elem.taskCounts = {}; // Initialize taskCounts if not defined
                }
    
                // Ensure taskCounts.NewTask is initialized
                if (elem.taskCounts.NewTask === undefined) {
                    elem.taskCounts.NewTask = 0; // Initialize NewTask if not defined
                }
    
                elem.tasks.push(newTask);  // Push the newTask into employee tasks
                elem.taskCounts.NewTask += 1; // Increment NewTask count
            }
        });
    
        // Reset form values
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');
    };
    
    
    return (
        <>
            <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
                <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
                    <div className="w-1/2">
                        <div>
                            <h3 className="text-lg text-gray-300 mb-0.5">Task Title</h3>
                            <input
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                className="text-md py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1.7px] border-grey-400 hover:border-blue-400 mb-4"
                                type="text"
                                placeholder="Name of the Task"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg text-gray-300 mb-0.5">Date</h3>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                className="text-md text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1.7px] border-grey-400 hover:border-blue-400 mb-4"
                                type="date"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg text-gray-300 mb-0.5">Assign to</h3>
                            <input
                                value={assignTo}
                                onChange={(e) => setAssignTo(e.target.value)}
                                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1.7px] border-grey-400 hover:border-blue-400 mb-4"
                                type="text"
                                placeholder="Employee Name"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg text-gray-300 mb-0.5">Category</h3>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="text-md py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1.7px] border-grey-400 hover:border-blue-400 mb-4"
                                type="text"
                                placeholder="Design, dev, etc."
                            />
                        </div>  
                    </div>

                    <div className="w-2/5 flex-col items-start">
                        <h3 className="text-lg text-gray-300 mb-0.5">Description</h3>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            className="w-full h-44 text-sm py-2 px-4 outline-none bg-transparent border-[2px] border-gray-300 hover:border-blue-400 rounded-md"
                            cols={30}
                            rows={10}
                        ></textarea>
                        <button className="bg-emerald-500 hover:bg-orange-600 px-5 py-2 rounded text-sm mt-10 w-1/2">
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex justify-center align-middle mt-20 w-1/2">
                <h1 className="text-2xl px-7 py-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ml-25">
                    EMPLOYEE MANAGEMENT SYSTEM BY N
                </h1>
            </div>
        </>
    )
}

export default CreateTask;
