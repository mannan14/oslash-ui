import React from "react";
import { Tab } from "@headlessui/react";
import IntroInsights from "./IntroInsights";
import IntroVersions from "./IntroVersions";

import ManageAccess from "./ManageAccess";

export default function IntroRightNavigation({name}){
    return (

        <div className="flex flex-col p-2 overflow-hidden bg-[#F9FAFB] w-[248px] focus:outline-none">
            {
                (name==='intro') ? 
                (
                    <div className="z-10 w-full flex flex-col items-center justify-center focus:outline-none overflow-hidden">
                        <Tab.Group>
                            <Tab.List className='flex w-full justify-around shadow-[inset_0px_-1px_0px_#E5E7EB] focus:outline-none'>
                                <Tab as='div' className={`w-full hover:cursor-pointer focus:outline-none`}>
                                {({selected}) => 
                                    (
                                        
                                        <div
                                            className={`${selected ? 'text-[#111827] ' : 'text-[#6B7280] '} flex items-center justify-center relative w-full h-10 text-sm font-mediumfocus:outline-none`}
                                        >
                                            <h3 className="pb-2 focus:outline-none">Insights</h3>
                                            <div className={`${selected ? `bg-[#4F46E5] w-full h-1 border-none rounded-l-full rounded-r-full` :``} absolute bottom-0 -z-10 focus:outline-none`}> </div>
                                        </div>
                                        
                                    )}

                                </Tab>

                                <Tab as='div' className={`relative w-full hover:cursor-pointer focus:outline-none`}>
                                    {({selected}) => (
                                        <div
                                            className={`${selected ? 'text-[#111827] ' : 'text-[#6B7280] '} flex items-center justify-center relative w-full h-10 text-sm font-medium focus:outline-none`}
                                        >
                                            <h3 className="pb-2 focus:outline-none">Versions</h3>
                                            <div className={`${selected ? `bg-[#4F46E5] w-full h-1 border-none rounded-l-full rounded-r-full` :``} absolute bottom-0 -z-10 focus:outline-none`}> </div>
                                        </div>
                                    )}
                                </Tab>
                            </Tab.List>
                            <Tab.Panels className='w-full h-full overflow-y-auto scrollbar-hide'>
                                <Tab.Panel>
                                        <IntroInsights />
                                </Tab.Panel>
                                <Tab.Panel>
                                        <IntroVersions />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                )
                :
                (
                    <>
                        <h3 className="uppercase p-2 font-medium text-xs text-[#6B7280]">manage access</h3>  
                        <input type="text" className="px-2 w-[232px] h-9 border border-solid border-[#D1D5DB] rounded-lg bg-[#F3F4F6] placeholder:text-[#D1D5DB] placeholder:text-sm p-2" placeholder="Email, comma separated" />
                    </>
                )
            }
            
            <ManageAccess name={name}/>
        </div>
    )
}