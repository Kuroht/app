"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Nav(){
    const [ menuHandler, setMenuHandler ] = useState(true);

    return(
        <nav className="w-full lg:w-2/3 mx-auto">
            <div className="w-full h-20 flex flex-row justify-between items-center">
                <Link href="/" className="text-left text-white text-3xl font-bold ml-3">Lugano</Link>
                <div className="md:flex hidden">
                    <Link href="/menu" className="text-center text-white text-xl font-semibold mr-3 ">Menu</Link>
                    <Link href="/about" className="text-center text-white text-xl font-semibold mr-3">About</Link>
                    <Link href="/dashboard" className="text-center text-white text-xl font-semibold mr-3">Login</Link>
                </div>
                <button onClick={ () => {setMenuHandler(!menuHandler)} } className="text-right text-white text-3xl font-bold md:hidden mx-4">{ menuHandler ? "↓" : "X" }</button>
            </div>
            <div className={`flex flex-col mt-[50%] md:hidden h-screen w-full ${ menuHandler ? "hidden" : "flex" }`}>
                <Link href="/menu" className="text-center text-white text-3xl font-bold mb-2">Menu</Link>
                <Link href="/about" className="text-center text-white text-3xl font-bold mb-2">About</Link>
                <Link href="/dashboard" className="text-center text-white text-3xl font-bold mb-2">Login</Link>
            </div>
        </nav>
    )
}
