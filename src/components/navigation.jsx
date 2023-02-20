import React from "react";
import NavIcon from "./NavIcon";

import { userInfo } from "../scripts/snippets";

export default function Navigation(){
    return(
        <header className="realtive -z-10 top-0">   
            <nav className="flex justify-end items-center pr-4 shadow-[inset_0px_-1px_0px_#E5E7EB] bg-white h-12">
                <NavIcon userlogo={`/images/${userInfo.username.toLowerCase()}.svg`}/>
            </nav>
        </header>
    )
}