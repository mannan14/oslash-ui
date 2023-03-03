import React from "react";
import CreateNewFolder from "./CreateNewFolder";


import LeftPanelFolders from "./LeftPanelFolders";


export default function LeftPanel({folderValue}){
    
    return (
    
        <div className="flex flex-col items-center overflow-hidden w-[248px] p-2 pb-3 space-y-1.5 shadow-[inset_-1px_0px_0px_#E5E7EB]">
            <CreateNewFolder 
            className={`bg-[#4F46E5] hover:bg-[#4e46e5eb] w-[232px] h-10 p-2 flex items-center rounded-lg focus:outline-none active:outline-none`} 
            textColor='text-white'
            />
            <LeftPanelFolders folderValue={folderValue}/>
        </div>
    )
}