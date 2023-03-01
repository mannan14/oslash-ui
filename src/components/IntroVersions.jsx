import React from "react";
import { editors, versionCheck } from "../scripts/versionTab";
import { userInfo } from "../scripts/snippets";

export default function IntroVersions(){
    return (
        <>
            <h3 className="uppercase text-xs font-medium text-[#6B7280] pt-4 px-2 focus:outline-none">editors</h3>
            <span className="flex flex-row mx-1 -space-x-2 focus:outline-none">
                {   
                    editors.slice(0,3).map((user) => (
                        <img key={user.username} src={`/assets/${user.username}.svg`} className={`relative `} alt={user.username} />
                    ))
                }
                <span className= "flex relative z-20 bg-[#111827] text-white text-xs items-center justify-center rounded-full border border-solid border-white w-8 h-8">
                    +{editors.length - 3}
                </span>
            </span>

            <div className="pt-4 px-2 focus:outline-none">
                <ul className=" space-y-4 overflow-y-auto h-full">
                    {
                        versionCheck.map((versions) => 
                        (
                            (versions.checked) ? 
                            (
                                <li key={versions.version_name} className="group flex relative z-10 hover:cursor-pointer"> 
                                    <span className="flex bg-[#4F46E5] items-center justify-center rounded-full w-8 h-8">
                                        <img src="/assets/check.svg" className="" alt="" />
                                    </span>
                                    <div className=" px-4">
                                        <p className="text-[#111827] font-medium text-xs group-hover:underline"> 
                                            {versions.version_name}
                                        </p>
                                        <span className="text-[#6B7280] text-sm">
                                            {userInfo.username} - {versions.version_date}
                                        </span>
                                    </div>
                                    <div className="absolute -left-[22px] top-10 -z-10 bg-[#E5E7EB] w-[76px] h-[2px] rotate-90 focus:outline-none"></div>
                                </li>
                            )
                            :
                            (versionCheck[versionCheck.length-1].version_name === versions.version_name) 
                            ?
                            (
                                <li key={versions.version_name} className="group hover:cursor-pointer flex relative z-10"> 
                                    <span className="bg-white border-2 border-solid border-[#D1D5DB] rounded-full w-8 h-8">
                                    </span>
                                    <div className="flex flex-col px-4">
                                        <p className="text-[#6B7280] text-xs group-hover:underline"> 
                                            {versions.version_name}
                                        </p>
                                        <span className="text-[#6B7280] text-sm">
                                            {userInfo.username} - {versions.version_date}
                                        </span>
                                    </div>
                                </li>
                            )
                            :
                            (   
                                <li key={versions.version_name} className="group flex relative z-10 hover:cursor-pointer"> 
                                    <span className="bg-white border-2 border-solid border-[#D1D5DB] rounded-full w-8 h-8">                                
                                    </span>
                                    <div className="flex flex-col px-4">
                                        <p className="text-[#6B7280] text-xs group-hover:underline"> 
                                            {versions.version_name}
                                        </p>
                                        <span className="text-[#6B7280] text-sm">
                                            {userInfo.username} - {versions.version_date}
                                        </span>
                                    </div>
                                    <div className="absolute -left-[22px] top-10 -z-10 bg-[#E5E7EB] w-[76px] h-[2px] rotate-90 focus:outline-none"></div>
                                </li>
                            )
                        ))
                    }
                </ul>
            </div>
        </>
    )
}