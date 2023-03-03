import React,{useState} from "react";
import logo from '../assets/logo.png'

import LeftNavigationSetting from "./LeftNavigationSetting";
import LeftNavigationimage from "./LeftNavigationImage";

const LeftnavigationIcons = [
    {
        IconName:'Snippets',
        Iconlogo:'/assets/LeftNavigationSnippets.svg'
    },
    {
        IconName:'Shortcuts',
        Iconlogo:'/assets/LeftNavigationShortcuts.svg'
    },
]


export default function LeftNavigation(){

    let [activeTab, setActiveTab] = useState('Snippets')

    return(
        <div className="flex flex-col w-[56px] bg-gray-50">

            <span className="inline-flex flex-shrink-0 h-12 items-center justify-center">
                <img src={logo} className="" alt=""/>
            </span>
                
            <div className="flex flex-col h-full p-2 justify-between">

                <div className="flex flex-col justify-between space-y-3">
                {
                    LeftnavigationIcons.map((icons) => (
                        <button
                        key={icons.IconName} 
                        className={`group flex flex-col text-center items-center hover:cursor-pointer focus:outline-none`}
                        onClick={()=>{setActiveTab(icons.IconName)}}
                        >   
                            <span className={`${activeTab !== icons.IconName ? `group-hover:bg-gray-100 group-active:bg-blue-100 group-hover:text-gray-900 text-gray-500` : ` text-black bg-blue-100 `} inline-flex items-center w-10 h-10 justify-center rounded-lg`}>
                                <LeftNavigationimage iconName={icons.IconName}/>
                            </span>
                            <h3 className={`${activeTab !== icons.IconName ? ` text-gray-500 group-hover:text-gray-900 `  : ` text-gray-900 `} text-center mt-1 text-[8px] font-medium leading-3`}>
                                {icons.IconName}
                            </h3>

                        </button>
                    ))
                }
                </div> 

                <LeftNavigationSetting/>
            </div>
            
        </div>
    )
}