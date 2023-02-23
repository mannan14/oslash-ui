import { Menu } from "@headlessui/react";
import React from "react";


const navValues = [
    {href:'/ViewProfile', label:'View Profile'},
    {href:'/Preferences', label:'Preferences'},
    {href:'/Logout', label:'Logout'}, 
]

export default function NavIcon({userlogo}){
    return (
        <Menu>
            <Menu.Button>
                <img src={userlogo} className="w-[32px] h-[32px] bg-white hover:cursor-pointer" alt="" />
            </Menu.Button>
            <Menu.Items className="absolute right-4 top-10 z-10 w-[162px] h-32 rounded-lg p-2 bg-white shadow-md focus:outline-none active:outline-none">
                <div className="flex flex-col">
                    {
                        navValues.map((value) => 
                            (
                                <Menu.Item key={value.href}>
                                    {
                                        ({active}) => (
                                            <button
                                            className={`${active ? `bg-gray-100 ` :` `} text-[#111827] hover:bg-[#F9FAFB] focus:bg-blue-100 rounded text-base text-left p-2 leading-5`}
                                            href="#"
                                            >
                                                {value.label}
                                            </button>
                                        )
                                    } 
                                </Menu.Item>
                            )
                        )
                    }
                    </div>
            </Menu.Items>
        </Menu>
    )
    
}