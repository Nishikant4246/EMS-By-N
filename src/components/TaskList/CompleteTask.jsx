import React from "react";

const CompletedTask = () =>{
    return (
        <>
        <div className="flex-shrink-0 p-5 h-full w-[300px] bg-blue-400 rounded-xl">
        <div className="flex items-center justify-between">
                <h3 className="bg-red-600 text-sm rounded-md py-1 px-3">High</h3>
                <h4 className="text-md font-semibold">16 Sep 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Play the Game.</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Perspiciatis dicta recusandae sed reiciendis. Corrupti perferendis vitae assumenda cupiditate iure quaerat? 
          Fuga libero harum voluptatem doloribus rerum deserunt at reiciendis quo.</p>
        <br />
         <div className="mt-2 " >
            <button className="bg-green-500 py-1 px-2 rounded-md text-sm">Completed</button>
        </div>
   </div>
   </>
    );
}

export default CompletedTask;  