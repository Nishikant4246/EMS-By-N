import React from "react";

const TaskListNumber = ({data}) =>{
    return (
      <div className="flex mt-10 justify-between gap-5 screen">
          <div className="px-9 py-6 rounded-xl w-[45%] bg-red-500">
             <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
             <h3 className="text-xl font-medium">New Task</h3>
          </div>
          <div className="px-9 py-6 rounded-xl w-[45%] bg-blue-500">
             <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
             <h3 className="text-xl font-medium">Completed Task</h3>
          </div>
          <div className="px-9 py-6 rounded-xl w-[45%] bg-green-500">
             <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2>
             <h3 className="text-xl font-medium">Active/Accepted Task</h3>
          </div>
          <div className="px-9 py-6 rounded-xl w-[45%] bg-yellow-500">
             <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
             <h3 className="text-xl font-medium">Failed Task</h3>
          </div>
      </div>
    );
}

export default TaskListNumber;