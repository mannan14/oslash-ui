import React, { Fragment } from "react";
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
                    <div className="relative w-full flex flex-col items-center justify-center focus:outline-none">
                        <Tab.Group>
                            <Tab.List className='flex w-full justify-around shadow-[inset_0px_-1px_0px_#E5E7EB] focus:outline-none'>
                                <Tab as='div' className={`w-full hover:cursor-pointer focus:outline-none`}>
                                {({selected}) => 
                                    (
                                        
                                        <div
                                            className={`${selected ? 'text-[#111827] ' : 'text-[#6B7280] '} flex items-center justify-center relative w-full h-10 text-sm font-mediumfocus:outline-none`}
                                        >
                                            <h3 className="pb-2 focus:outline-none">Insights</h3>
                                            <div className={`${selected ? `bg-[#4F46E5] w-full h-1 border-none rounded-t-sm` :``} absolute bottom-0.5 focus:outline-none`}> </div>
                                        </div>
                                        
                                    )}

                                </Tab>

                                <Tab as='div' className={`relative w-full hover:cursor-pointer focus:outline-none`}>
                                    {({selected}) => (
                                        <div
                                            className={`${selected ? 'text-[#111827] ' : 'text-[#6B7280] '} flex items-center justify-center relative w-full h-10 text-sm font-medium focus:outline-none`}
                                        >
                                            <h3 className="pb-2 focus:outline-none">Versions</h3>
                                            <div className={`${selected ? `bg-[#4F46E5] w-full h-1 border-none rounded-t-sm` :``} absolute bottom-0.5 focus:outline-none`}> </div>
                                        </div>
                                    )}
                                </Tab>
                            </Tab.List>
                            <Tab.Panels className='w-full'>
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