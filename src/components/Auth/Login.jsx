import React, { useState } from "react";

const Login = ({handleLogin}) =>{
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const submitHandler = (event) =>{
        event.preventDefault();
        console.log("email is", email);
        console.log("password is", password);
        handleLogin(email, password);
        setEmail("");
        setPassword("");
   }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
             <div className="border-2 border-emerald-600 hover:border-blue-400 p-20  rounded-xl">
                <form onSubmit={(event) =>{submitHandler(event)}} className="flex flex-col items-center justify-center">

                    <input value={email} onChange={(event) =>{
                        setEmail(event.target.value)
                    }}
                        required className="mb-5 outline-none hover:border-blue-200 bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 " type="email" placeholder="Hey! Enter your Email"/>
                    <input  value={password} onChange={(event) =>{
                        setPassword(event.target.value)
                    }}
                       required className="outline-none hover:border-blue-200 bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 " type="password" placeholder="Enter your Password"/>
                    <button className="text-white outline-none mt-4 border-2 bg-emerald-600 text-xl py-2 px-5 active:bg-red-500  focus:ring hover:bg-blue-500 rounded-full placeholder:text-white">&nbsp; Login &nbsp;</button>
                </form>
             </div>
        </div>
    )
}

export default Login;