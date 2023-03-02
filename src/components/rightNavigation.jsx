import React from "react";
import ManageAccess from "./ManageAccess";


export default function RightNavigation({name}){
    return (
        <div className="flex flex-col h-full w-[248px] overflow-hidden space-y-4 p-2">
            <h3 className="uppercase font-medium text-xs text-[#6B7280]">
                manage access
            </h3>
            
            <input type="text" className=" mx-auto w-[232px] h-9 border border-solid border-[#D1D5DB] rounded-lg bg-[#F3F4F6] placeholder:text-[#D1D5DB] placeholder:text-sm p-2" placeholder="Email, comma separated" />
            
            <ManageAccess name={name}/>
        </div>
    )
}