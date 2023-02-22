import React from "react";
import { apps } from "../scripts/introTab";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function IntroInsights(){

    let [categories] = useState(['Today','Week','All Time'])
    
    return (
        
            <Tab.Group>
                <Tab.List className="p-[2px] flex space-x-1 rounded-xl bg-[#F9FAFB] my-4 border border-solid">
                    {categories.map((category) => (
                        <Tab
                        key={category}
                        className={({ selected }) =>
                            classNames(
                            'w-full rounded-lg py-2 text-xs font-medium leading-5',
                            'ring-white focus:outline-none ',
                            selected
                                ? 'text-[#111827] bg-[#DBEAFE]'
                                : 'text-[#6B7280]'
                            )
                        }
                        >
                        {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className="space-y-2">
                            <div className="">
                                <h3 className="uppercase text-[#6B7280] text-xs font-semibold">invocations by app</h3>
                                {
                                    apps.map((link) => 
                                    (
                                        <div key={link.app_name} className="flex items-center p-1">
                                            <img src={link.href} className=" w-8" alt="" />
                                            <h3 className="overflow-hidden px-2 whitespace-nowrap text-ellipsis text-[#111827] text-sm font-medium">{link.app_name}</h3>
                                            <span className="px-[6px] ml-auto text-sm text-[#111827] font-normal">{link.invocation}</span>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                            <div className="space-y-2">
                                <h3 className="uppercase text-[#6B7280] text-xs font-semibold">open rates by app</h3>
                                {
                                    apps.map((link) => 
                                    (   
                                        <div key={link.app_name} className="flex items-center p-1">
                                            <img src={link.href} className=" w-8" alt="" />
                                            <h3 className="overflow-hidden px-2 whitespace-nowrap text-ellipsis text-[#111827] text-sm font-medium">{link.app_name}</h3>
                                            <div className="ml-auto">
                                                <span className= "text-sm p-2 text-[#111827] font-normal">{link.openrates}</span>
                                                <span className= "text-xs text-[#4F46E5] font-medium">
                                                    ({ eval(link.openrates)*100 }%)
                                                </span>
                                            </div>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        
    )
}