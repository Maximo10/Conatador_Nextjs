"use client";
import {useState} from "react";
export default function Home() {
    const [count,setCount]=useState(0);
    return(
        <div className="bg-white p-10 rounded-xl shadow-xl text-center max-w-sm w-full">
            <h1 className="text-4xl font-bold mb-8">Contador Nextjs</h1>
            <div className="text-5xl font-mono mb-8">{count}</div>
            <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition" onClick={()=>setCount(count+1)}>+</button>
                <button className="bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-lg transition" onClick={()=>setCount(count-1)}>-</button>
                <button className="bg-gray-600 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition" onClick={()=>setCount(0)}>C</button>
            </div>
        </div>
    );
}
