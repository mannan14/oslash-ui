import React from "react";
import { Menu } from "@headlessui/react";

const navValues = [
    {href:'/ViewProfile', label:'Viewer'},
    {href:'/Preferences', label:'Editor'},
    {href:'/Logout', label:'Remove'}, 
]

export default function OwnerDropdown({users}){
    return (
        <>
           <div className="flex items-center justify-between p-1">
                    <div className="flex">
                        <img src='/images/salman.svg' className="" alt="" />
                        <h3 className="flex items-center px-2 overflow-hidden whitespace-nowrap text-ellipsis">{users[0].name}</h3>
                    </div>
                    { 

                    }
                    <Menu>
                        <Menu.Button className="flex justify-center m-2">
                            <span className="text-xs text-[#6B7280] font-normal">Owner</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 text-[#6B7280] m-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </Menu.Button>
                        <Menu.Items className="absolute top-32 right-4 z-10 w-[162px] h-[132px] rounded-lg p-2 bg-white shadow-md">
                            <div className="flex flex-col">
                                {
                                    navValues.map((value) => 
                                        (
                                            <Menu.Item key={value.href}> 
                                                <button
                                                className={` text-[#111827] hover:bg-[#F9FAFB] rounded text-base text-left p-2 leading-5`}
                                                href="#"
                                                >
                                                {value.label}
                                                </button>
                                            </Menu.Item>
                                        )
                                    )
                                }
                            </div>
                        </Menu.Items>
                    </Menu>
            </div>
        </>
    )
}