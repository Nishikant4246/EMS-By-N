import React from "react";

const AcceptTask = ({data}) =>{
    console.log("This is data  from Accept task ", data);
    return (
        <>
    <div className="flex-shrink-0 p-5 h-full w-[300px] bg-red-400 rounded-xl">
        <div className="flex items-center justify-between">
                <h3 className="bg-red-600 text-sm rounded-md py-1 px-3">{data.category}</h3>
                <h4 className="text-md font-semibold">{data.taskdate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2">
            {data.taskDescription}
        </p>
        <br />
         <div className="flex justify-between mt-4" >
            <button className="bg-green-500 py-1 px-2 rounded-md text-sm">Mark as Completed</button>
            <button className="bg-red-500 py-1 px-2 text-sm rounded-md">Mark as Failed</button>
         </div>
   </div>
   </>
    );
}

export default AcceptTask;  