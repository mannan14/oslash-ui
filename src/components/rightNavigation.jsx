import React from "react";

export default function rightNavigation(){
    return (
        <div className="bg-[#F9FAFB] flex flex-col w-[248px] h-screen">
            <h3 className="uppercase mt-2 ml-2 mb-4 font-medium text-xs text-[#6B7280]">manage access</h3>
            <input type="text" className="mx-auto w-[232px] h-9 border border-solid border-[#D1D5DB] rounded-lg bg-[#F3F4F6] placeholder:text-[#D1D5DB] placeholder:text-sm p-2" placeholder="Email, comma separated" />
            <div className="flex items-center mr-2 mt-2">
            <img src='/images/mannan.svg' className=" m-2" alt="" />
            <h3 className=" ml-0">Salman Ahmed</h3>
            <span className="px-[6px] ml-auto text-xs text-[#6B7280] font-normal">Owner</span>
            </div>
            <p className="text-center mx-2 my-2 text-sm text-[#667085]">
                This folder cannot be shared with other members
            </p>
        </div>
    )
}