import React from "react";
import AcceptTask from'./AcceptTask'
import NewTask from "./NewTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
    return (
        <div id="tasklist" className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10 rounded-xl">
             {data.tasks.map((elem,id) =>{

                if(elem.active){
                        return <AcceptTask key={id} data={elem} />
                }
                if(elem.NewTask){
                        return <NewTask key={id} data={elem}/>
                }
                if(elem.completd){
                        return <CompletedTask key={id} data={elem}/>
                }
                if(elem.failed){
                        return <FailedTask key={id} data={elem}/>
                }
             })}
        </div>
    )
}

export default TaskList;