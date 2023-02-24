import React from "react";
import menu from '../assets/menu.svg'
import { snippet } from "../scripts/snippets";
import Tippy from "@tippyjs/react"; 
import { Menu } from "@headlessui/react";

export default function FolderName({Foldername}){
    return (

        <div className="flex h-[92px] justify-between">
            <div className="p-6 flex">
                {
                    (Foldername === snippet[0].foldername) ? (     
                        <div className="px-4">
                            <h2 className="font-normal text-xs text-[#374151]">Folder Name</h2>
                            <h1 className=" text-black font-medium text-lg">{Foldername}</h1>
                        </div> 
                    ) 
                    : 
                    <div className="flex justify-between">  
                        <div className="flex flex-col">
                            <span className="flex">

                                <h2 className=" font-normal text-xs text-[#374151]">Folder Shortcut</h2>
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
                            <span className="flex ">
                                <svg className="w-6 h-6 text-[#6366F1]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 6C12.3183 6 12.6235 6.12643 12.8485 6.35147C13.0736 6.57652 13.2 6.88174 13.2 7.2V10.8H16.8C17.1183 10.8 17.4235 10.9264 17.6485 11.1515C17.8736 11.3765 18 11.6817 18 12C18 12.3183 17.8736 12.6235 17.6485 12.8485C17.4235 13.0736 17.1183 13.2 16.8 13.2H13.2V16.8C13.2 17.1183 13.0736 17.4235 12.8485 17.6485C12.6235 17.8736 12.3183 18 12 18C11.6817 18 11.3765 17.8736 11.1515 17.6485C10.9264 17.4235 10.8 17.1183 10.8 16.8V13.2H7.2C6.88174 13.2 6.57652 13.0736 6.35147 12.8485C6.12643 12.6235 6 12.3183 6 12C6 11.6817 6.12643 11.3765 6.35147 11.1515C6.57652 10.9264 6.88174 10.8 7.2 10.8H10.8V7.2C10.8 6.88174 10.9264 6.57652 11.1515 6.35147C11.3765 6.12643 11.6817 6 12 6Z" fill="currentColor"/>
                                </svg>
                                <h2 className="text-[#6366F1] font-medium text-lg">Add Shortcut</h2>
                            </span>
                        </div>
                        <div className="px-12">
                            <h2 className="font-normal text-xs text-[#374151]">Folder Name</h2>
                            <h1 className=" text-black font-medium text-lg">{Foldername}</h1>
                        </div> 
                    </div>
                }
            </div>
            <>
            <Menu>
                <Menu.Button className={`focus:outline-none`}>
                    <img className="m-4 p-2 h-9 w-9 rounded-lg hover:bg-gray-100" src={menu} alt="" />
                </Menu.Button>
                <Menu.Items className="absolute top-[115px] right-[265px] z-10 rounded-lg p-1 bg-white shadow-md focus:outline-none active:outline-none">
                    <div className="flex flex-col">
                        <Menu.Item>
                            {
                                ({active}) => (
                                    <>
                                        <button
                                        className={`${active ? `bg-gray-100 ` :` `} flex items-center text-[#111827] hover:bg-[#F9FAFB] focus:bg-blue-100 rounded-md text-base text-left p-2 leading-5`}
                                        href="#"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-1 text-[#111827]" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                            </svg>
                                            <p>Edit</p> 
                                        </button>
                                    </>
                                )
                            }
                        </Menu.Item>
                        <Menu.Item>
                            {
                                ({active}) => (
                                    <>
                                        <button
                                        className={`${active ? `bg-gray-100 ` :` `} flex items-center text-red-500 hover:bg-[#F9FAFB] focus:bg-blue-100 rounded-md text-base text-left p-2 leading-5`}
                                        href="#"
                                        >   
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            <p>Remove</p>
                                        </button>
                                    </>
                                )
                            } 
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Menu>
            </>
        </div>
    )
}