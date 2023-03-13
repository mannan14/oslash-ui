import React,{useState} from "react";
import CreateNewFolderButton from "./CreateNewFolderButton";
import CreateNewFolderModal from "./CreateNewFolderModal";

import LeftPanelFolders from "./LeftPanelFolders";


export default function LeftPanel({folderValue}){

    let [isOpen, setIsOpen] = useState(false)
    
    return (
    
        <div className="flex flex-col items-center overflow-hidden w-[248px] p-2 pb-0 shadow-[inset_-1px_0px_0px_#E5E7EB]">
            <CreateNewFolderButton 
            classname={`bg-[#4F46E5] hover:bg-[#4e46e5eb] w-[232px] h-10 p-2 flex items-center rounded-lg focus:outline-none active:outline-none`} 
            textColor={'text-white'}
            />

        
            {/* <button 
                type="button"
                onClick={() => setIsOpen(true)}  
                className={`bg-[#4F46E5] hover:bg-[#4e46e5eb] w-[232px] h-10 p-2 flex items-center rounded-lg focus:outline-none active:outline-none `}
            >
                <span className={`text-white font-medium p-2`}>+</span>
                <span className={`text-white font-medium text-center`}>Create New</span>
            </button>
            {
                isOpen === true ?
                (
                    <CreateNewFolderModal isActive={isOpen}/>
                )
                :
                null
            } */}

            <div className="mt-2 overflow-y-auto scrollbar-hide">
                <LeftPanelFolders folderValue={folderValue}/>
            </div>
        </div>
    )
}