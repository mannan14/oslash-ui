import React from "react";

import menu from '../assets/menu.svg'

export default function folderName(){
    return (
        <div className="bg-[#F9FAFB] top-0 flex justify-between">
            <div className="p-6 ">
                <h2>Folder Name</h2>
                <h1 className=" font-medium">Salman's Folder</h1>
            </div>  
                <img className="p-6" src={menu} alt="" />
        </div>
    )
}