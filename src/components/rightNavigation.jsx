import React from "react";
import ManageAccess from "./ManageAccess";


export default function RightNavigation({name}){
    return (
        <div className="bg-[#F9FAFB] flex flex-col w-60 h-screen space-y-4">
            <h3 className="uppercase p-2 font-medium text-xs text-[#6B7280]">manage access</h3>
            
            <input type="text" className="px-2 mx-auto w-[232px] h-9 border border-solid border-[#D1D5DB] rounded-lg bg-[#F3F4F6] placeholder:text-[#D1D5DB] placeholder:text-sm p-2" placeholder="Email, comma separated" />
            
            <ManageAccess name={name}/>
        </div>
    )
}