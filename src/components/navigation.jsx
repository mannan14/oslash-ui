import React from "react";
import NavIcon from "./NavIcon";

const userInfo = {
    username:'salman',
}

export default function Navigation(){
    return(
        <header className="realtive top-0 left-14">   
            <nav className="flex justify-end items-center pr-4 shadow-[inset_0px_-1px_0px_#E5E7EB] bg-white h-12">
                <NavIcon Info={userInfo} userlogo={`/images/${userInfo.username}.svg`}/>
            </nav>
        </header>
    )
}
