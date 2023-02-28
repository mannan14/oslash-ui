import React from "react";


export default function LeftNavigationButton({classname,icon,name}){
    return (
        <>
            <button 
            href='#'
            className={classname}>
                <a href="" className="">  
                    {icon}
                    <h3 className={` text-center text-gray-500 group-hover:text-black mt-1 text-[8px] font-medium leading-3`}>
                        {name}
                    </h3>
                </a>
            </button>
        </>
    )
}