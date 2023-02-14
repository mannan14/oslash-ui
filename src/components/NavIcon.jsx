import { Menu } from "@headlessui/react";
import React from "react";


const navValues = [
    {href:'/ViewProfile', label:'View Profile'},
    {href:'/Preferences', label:'Preferences'},
    {href:'/Logout', label:'Logout'}, 
]

const NavIcon = (Info) => {
    return (
        <Menu>
            <Menu.Button>
                <img src={Info.userlogo} className="w-[32px] h-[32px] bg-white hover:cursor-pointer" alt="" />
            </Menu.Button>
            <Menu.Items className="absolute right-4 top-12 z-10 w-[162px] h-[132px] rounded-lg p-2 bg-white shadow-md">
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
    )
    
}

export default NavIcon;