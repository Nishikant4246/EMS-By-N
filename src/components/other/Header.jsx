import React from "react";
import { useState } from "react";

const Header = (props) => {
    
    // const [username, setUsername] = useState('');
    // if(!data){
    //     setUsername('admin')
    // }else{
    //     setUsername(data.firstName)
    // }

    const logOutUser = () =>{
        console.log("LogOut Succesfully");
        localStorage.setItem('loggedInUser', '');
        //window.location.reload() alternale Method for logout
        props.changeUser('');

    }
    return (
        <div className="flex items-end justify-between">
            <h1 className="text-3xl font-medium">Hello !<br /> <span className="text-4xl">Nishikant V Kshirsagar&#9995;</span></h1>
            <button onClick={logOutUser} className="bg-red-600 border hover:border-blue-500 text-lg font-medium text-white px-5 py-2 rounded-md">&nbsp;Logout&nbsp;</button>
        </div>
    )
}

export default Header;