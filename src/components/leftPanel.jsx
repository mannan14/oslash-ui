import React from "react";

import '../styles/base.css'
import { Disclosure } from "@headlessui/react";


export default function leftPanel(){
    const snippets =
        [
            {folders:'Salman', foldername:`Salman's Folder`, subfolder:[null]},
            {folders:'untitle', foldername:'Untitled Folder', subfolder:['o/intro']},
            {folders:'pro', foldername:'o/pro', subfolder:[null]},
        ]

    return (
        <div className="flex flex-col absolute items-center w-[248px] h-full left-14 shadow-[inset_-1px_0px_0px_#E5E7EB]">
            <button className="bg-[#4F46E5] hover:bg-[#4e46e5eb] mt-2 w-[232px] h-10 p-2 flex items-center rounded-lg">
                <span className="text-white font-medium px-2">+</span>
                <span className=" text-white font-medium text-center">Create New</span>
            </button>
            {
                snippets.map((values)=>(
                    <Disclosure>
                    {({open})=>(
                        <>
                        <div className={`flex flex-row h-10 px-2 mt-2 w-[232px] items-center rounded-lg hover:cursor-pointer hover:bg-[#DBEAFE]`}>   
                            <Disclosure.Button>
                                <svg 
                                className={`${
                                        open ? 'rotate-90 transform' : ''
                                    } h-4 w-4 ml-1 text-black`}
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </Disclosure.Button>
                            
                                <a href={`/folders/${values.folders}`} key={values.href} className="flex">
                                    <svg className=" w-5 h-5 ml-1 text-[#111827]" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9L11 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V6Z" fill="currentColor"/>
                                    </svg>
                                    <span className="text-black ml-1 font-medium text-center hover:underline">{values.foldername}</span>        
                                </a>
                                {
                                    (values.folders==='pro') ? (
                                        <span className=" bg-[#F3F4F6] px-[6px] ml-auto rounded-2xl text-xs font-normal text-[#6B7280]">Protocol</span>
                                    ) 
                                    :
                                    null
                                }
                        </div>

                        <Disclosure.Panel>
                            <button className=" w-[232px] h-10 text-base text-left text-[#111827] rounded-lg hover:bg-[#DBEAFE]">
                                <span className="py-2 pl-14">
                                    {values.subfolder.map((val)=>{
                                    return val
                                    })}
                                </span> 
                            </button>
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                ))
            }
        </div>
    )
}