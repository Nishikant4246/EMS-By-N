import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () =>{
   
   const [userData, setUserData] = useContext(AuthContext);

    return(
        <div className="bg-[#1C1C1C] p-5  mt-10  rounded-xl">
           <div className="mb-2 py-2 px-4 flex justify-between rounded bg-black">
                 <h2 className="text-xl font-semibold w-1/5">Employees Name</h2> 
                 <h2 className="text-xl font-semibold w-1/5">New Task</h2>
                 <h2 className="text-xl font-semibold w-1/5">Active Task</h2>
                 <h2 className="text-xl font-semibold w-1/5">Completed</h2>
                 <h2 className="text-xl font-semibold w-1/5">Failed Task</h2>
           </div>
           <div className="p-3">
                 {userData.employees.map(function(elem,id){
                     return (
                     <div key={id} className="mb-2 py-2 px-4 flex justify-between border-2  border-orange-100 border-x-orange-700">
                         <h2 className="text-lg font-semibold w-1/5 ">{elem.firstName}</h2>
                         <h2 className="text-lg font-semibold w-1/5 text-blue-600">{elem.tasks.newTask}</h2>
                         <h2 className="text-lg font-semibold w-1/5 text-yellow-400">{elem.tasks.active}</h2>
                         <h2 className="text-lg font-semibold w-1/5 text-green-600">{elem.tasks.completed}</h2>
                         <h2 className="text-lg font-semibold w-1/5 text-red-600">{elem.tasks.failed}</h2>
                     </div>
                     );
                 })}
           </div>
        </div>
    )
}

export default AllTask;