import React from "react";
import menu from '../assets/menu.svg'
import { Menu } from "@headlessui/react";

export default function FolderNameMenu() {
    return (
        <>
            <Menu>
                <Menu.Button className={` focus:outline-none rounded-lg w-9 h-9`}>
                    <img className="p-2 h-9 w-9 rounded-lg hover:bg-gray-100" src={menu} alt="" />
                </Menu.Button>
                <Menu.Items className="flex flex-col w-36 absolute  top-[115px] right-[270px] space-y-1 z-10 rounded-lg p-1 bg-white shadow-md focus:outline-none active:outline-none"> 
                    <Menu.Item>
                        {
                            ({active}) => (
                                <>
                                    <button
                                    className={`${active ? `bg-gray-100 ` :` `} flex items-center text-[#111827] hover:bg-[#F9FAFB] focus:bg-blue-100 rounded-md text-base text-left py-2 px-2 leading-5 focus:outline-none`}
                                    href="#"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-1 text-[#111827]" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                        </svg>
                                        <p className="text-left">Edit</p> 
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
                                    className={`${active ? `bg-gray-100 ` :` `} flex items-center text-red-500 hover:bg-[#F9FAFB] focus:bg-blue-100 rounded-md text-base text-left py-2 px-2 leading-5 focus:outline-none`}
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
                </Menu.Items>
            </Menu>
        </>
    )
}