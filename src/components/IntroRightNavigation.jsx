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

        <div className="flex flex-col p-2 bg-[#F9FAFB] h-full w-[248px] focus:outline-none">
            {
                (name==='intro') ? 
                (
                    <div className="w-full items-center justify-center focus:outline-none">
                        <Tab.Group>
                            <Tab.List className='flex justify-around shadow-[inset_0px_-1px_0px_#E5E7EB] focus:outline-none'>
                                <Tab 
                                    className={({selected}) => 
                                    classNames(
                                        `relative w-full h-9 text-sm font-medium ring-white focus:outline-none`,
                                        selected ? 
                                        'text-[#111827] border-b-4 border-b-[#4F46E5]'
                                        // shadow-[inset_0px_-1px_0px_#4F46E5]
                                        :
                                        'text-[#6B7280]'
                                    )}>
                                        <h3 className="flex h-10 text-center justify-center">Insights</h3>
                                    {/* {({selected}) => 
                                    (
                                        <span 
                                            className={`${selected ? 'bg-[#4F46E5] w-full' : ' ' } absolute -z-[1] h-1 focus:outline-none`}
                                        >
                                        </span>    
                                    )
                                    } */}
                                </Tab>
                                <Tab 
                                    className={({selected}) => 
                                    classNames(
                                        `relative w-full h-9 text-sm font-medium  ring-white focus:outline-none`,
                                        selected ? 
                                        'text-[#111827] border-b-4 border-b-[#4F46E5]'
                                        :
                                        'text-[#6B7280]'
                                    )}>
                                        <h3 className="flex h-10 text-center justify-center">Version</h3>
                                    {/* {({selected}) => 
                                    (
                                        <span 
                                            className={`${selected ? 'bg-[#4F46E5] w-full' : ' ' } absolute -z-[1] h-1 focus:outline-none`}
                                        >
                                        </span>    
                                    )
                                    } */}
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