import React from "react";
import { snippet } from "../scripts/snippets";
import Tippy from "@tippyjs/react"; 
import FolderNameMenu from "./FolderNameMenu";


export default function FolderName({Foldername}){
    return (
        <div className="flex w-full h-[92px] items-center justify-between p-6 bg-gray-50">
            <div className="flex items-center">
                {
                    (Foldername === snippet[0].foldername) ? (     
                        <div className="px-4 w-full">
                            <h2 className="font-normal text-xs text-[#374151] overflow-hidden text-ellipsis">Folder Name</h2>
                            <h1 className=" text-black w-40 font-medium text-lg overflow-hidden text-ellipsis">{Foldername}</h1>
                        </div> 
                    ) 
                    : 
                    <div className="flex justify-between">  
                        <div className="flex flex-col w-full">
                            <span className="flex">

                                <h2 className=" font-normal text-xs overflow-hidden text-ellipsis text-[#374151]">Folder Shortcut</h2>
                                <Tippy
                                    content="Add common prefix to group snippets eg: o/sal"
                                    className="relative -top-2 z-50 w-48 text-left text-xs text-gray-100 bg-gray-600 rounded-[4px] px-2 py-[2px]"
                                    placement="bottom-start"
                                >                      
                                    <svg className="w-4 h-4 ml-1 text-[#6B7280]" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 8.5H6.5V5.5H5.5V8.5ZM6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1ZM6 10C3.795 10 2 8.205 2 6C2 3.795 3.795 2 6 2C8.205 2 10 3.795 10 6C10 8.205 8.205 10 6 10ZM5.5 4.5H6.5V3.5H5.5V4.5Z" fill="currentColor"/>
                                    </svg>
                                </Tippy>

                            </span>
                            {/* <button className="flex ">
                                <svg className="w-6 h-6 text-[#6366F1]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 6C12.3183 6 12.6235 6.12643 12.8485 6.35147C13.0736 6.57652 13.2 6.88174 13.2 7.2V10.8H16.8C17.1183 10.8 17.4235 10.9264 17.6485 11.1515C17.8736 11.3765 18 11.6817 18 12C18 12.3183 17.8736 12.6235 17.6485 12.8485C17.4235 13.0736 17.1183 13.2 16.8 13.2H13.2V16.8C13.2 17.1183 13.0736 17.4235 12.8485 17.6485C12.6235 17.8736 12.3183 18 12 18C11.6817 18 11.3765 17.8736 11.1515 17.6485C10.9264 17.4235 10.8 17.1183 10.8 16.8V13.2H7.2C6.88174 13.2 6.57652 13.0736 6.35147 12.8485C6.12643 12.6235 6 12.3183 6 12C6 11.6817 6.12643 11.3765 6.35147 11.1515C6.57652 10.9264 6.88174 10.8 7.2 10.8H10.8V7.2C10.8 6.88174 10.9264 6.57652 11.1515 6.35147C11.3765 6.12643 11.6817 6 12 6Z" fill="currentColor"/>
                                </svg>
                                <h2 className="text-[#6366F1] font-medium text-lg">Add Shortcut</h2>
                            </button> */}
                            <h1 className="text-black w-28 font-medium text-lg overflow-hidden text-ellipsis"> jsnfwnfjwnfown</h1>
                        </div>

                        <div className="px-12 w-full">
                            <h2 className="font-normal text-xs text-[#374151]">Folder Name</h2>
                            <h1 className=" text-black w-28 font-medium text-lg overflow-hidden text-ellipsis">{Foldername}nnkejgnjenfonerognero</h1>
                        </div> 
                    </div>
                }
            </div>
            <FolderNameMenu/>
        </div>
    )
}