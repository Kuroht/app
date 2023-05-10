"use client"

import { useState } from "react"
import Link from "next/link"

export default function AdminNav(){
    const [ sideHandler, setSideHandler ] = useState(true);

    return(
        <div className={`flex items-center justify-evenly w-full ${ sideHandler ? "h-20" : "h-40" } bg-slate-300`}>
            <Link className="text-white text-lg md:text-3xl" href="/dashboard/products">Products</Link>
            <Link className="text-white text-lg md:text-3xl" href="/dashboard/ingredients">Ingredients</Link>
            <Link className="text-white text-lg md:text-3xl" href="/dashboard/users">Users</Link>
            <button className="text-white text-3xl" onClick={ () => setSideHandler(!sideHandler)}>{ sideHandler ? "↓" : "↑"  }</button>
        </div>
    )
}