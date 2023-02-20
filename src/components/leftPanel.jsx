import React from "react";
import CreateNewFolder from "./CreateNewFolder";


import LeftPanelFolders from "./LeftPanelFolders";


export default function LeftPanel({folderValue}){
    
    return (
        <div className="flex flex-col absolute items-center w-[248px] h-full top-12 left-14 shadow-[inset_-1px_0px_0px_#E5E7EB]">
            <CreateNewFolder/>
            <LeftPanelFolders folderValue={folderValue}/>
        </div>
    )
}