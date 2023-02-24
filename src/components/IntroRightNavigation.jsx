import React from "react";
import { Tab } from "@headlessui/react";
import IntroInsights from "./IntroInsights";
import IntroVersions from "./IntroVersions";

import ManageAccess from "./ManageAccess";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function IntroRightNavigation({name}){

    return (
        // bg-[#F9FAFB] flex flex-col w-[248px] h-screen space-y-4
        <div className="flex flex-col bg-[#F9FAFB] h-full w-[248px] focus:outline-none">
            {
                (name==='intro') ? 
                (
                    
                    <div className="px-2 focus:outline-none">
                        <div className="h-10 w-50 items-center shadow-[inset_0px_-1px_0px_#E5E7EB] focus:outline-none">
                            <Tab.Group>
                                <Tab.List className='flex justify-around'>
                                    <Tab 
                                        className={({selected}) => 
                                        classNames(
                                            `w-1/2 py-2 m-1 text-sm font-medium ring-white focus:outline-none`,
                                            selected ? 
                                            'text-[#111827] shadow-[inset_0px_-1px_0px_#4F46E5]'
                                            :
                                            'text-[#6B7280]'
                                        )}>
                                        Insights
                                    </Tab>
                                    <Tab 
                                        className={({selected}) => 
                                        classNames(
                                            `w-1/2 py-2 m-1  text-sm font-medium  ring-white focus:outline-none`,
                                            selected ? 
                                            'text-[#111827] shadow-[inset_0px_-1px_0px_#4F46E5]'
                                            :
                                            'text-[#6B7280]'
                                        )}>
                                        Versions
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels className=''>
                                    <Tab.Panel>
                                        <div className="space-y-2 focus:outline-none">
                                            <IntroInsights />
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <div className="space-y-2 focus:outline-none">
                                            <IntroVersions />
                                        </div>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
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