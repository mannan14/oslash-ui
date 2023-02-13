import React from "react";
import { useState,useRef } from "react";

import '../styles/base.css'

import { Disclosure } from "@headlessui/react";

export default function leftPanel(){
    const [active, setActive] = useState(false)

    // const imgvisible = useRef("")    
    // const imghidden = useRef("")

    const tags = ['o/sal', 'o/pro']

    function moveHover(){
        () => setActive(true)
        // const imgVisible = imgvisible.current
        // const imgHidden = imghidden.current

        const hidden = document.getElementsByClassName('hidden')
        hidden.classList.add('')
    }

    return (
        <div className="flex flex-col absolute items-center w-[248px] h-full left-14 shadow-[inset_-1px_0px_0px_#E5E7EB]">
            <button className="bg-[#4F46E5] hover:bg-[#4e46e5eb] mt-2 w-[232px] h-10 p-2 flex items-center rounded-lg">
                <span className="text-white font-medium px-2">+</span>
                <span className=" text-white font-medium text-center">Create New</span>
            </button>

            <Disclosure>
                {({open})=>(
                    <>
                    <div className="flex flex-row h-10 p-2 mt-2 w-[232px] items-center rounded-lg hover:underline hover:bg-[#DBEAFE]">   
                        <Disclosure.Button onMouseOver={moveHover} className="">
                            <svg 
                            className={`${
                                    open ? 'rotate-90 transform' : ''
                                } h-4 w-4 ml-1 text-black`}
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </Disclosure.Button>
                            <svg className=" w-5 h-5 ml-2 mr-1 text-[#111827]" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9L11 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V6Z" fill="currentColor"/>
                            </svg>
                            <span className="text-black font-medium text-center">Salman's Folder</span>
                    </div>
                    <Disclosure.Panel>
                        <button className=" w-[232px] h-10 text-base text-left text-[#111827] rounded-lg hover:bg-[#DBEAFE]">
                            <span className="py-2 pl-14">o/intro</span> 
                        </button>
                    </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({open})=>(
                    <>
                    <div className="flex flex-row h-10 p-2 mt-2 w-[232px] items-center rounded-lg hover:underline hover:bg-[#DBEAFE]">   
                        <Disclosure.Button onMouseOver={moveHover} className="">
                            <svg 
                            className={`${
                                    open ? 'rotate-90 transform' : ''
                                } h-4 w-4 ml-1 text-black`} 
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </Disclosure.Button>
                        <svg className=" w-5 h-5 ml-2 mr-1 text-[#111827]" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9L11 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V6Z" fill="currentColor"/>
                        </svg>

                        <span className="text-black font-medium text-center">o/sal</span>
                        <span className="bg-[#F3F4F6] py-[2px] ml-auto px-[6px] rounded-2xl text-xs font-normal text-[#6B7280]">Sales</span>
                    </div>
                    <Disclosure.Panel>
                        <button className=" w-[232px] h-10 text-base text-left text-[#111827] rounded-lg hover:bg-[#DBEAFE]">
                            <span className="py-2 pl-14">o/intro</span> 
                        </button>
                    </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({open})=>(
                    <>
                    <div className="flex flex-row h-10 p-2 mt-2 w-[232px] items-center rounded-lg hover:underline hover:bg-[#DBEAFE]">   
                        <Disclosure.Button onMouseOver={moveHover} className="">
                            <svg 
                            className={`${
                                    open ? 'rotate-90 transform' : ''
                                } h-4 w-4 ml-1 text-black`} 
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </Disclosure.Button>
                        <svg className="w-5 h-5 ml-2 mr-1 text-[#111827]" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9L11 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V6Z" fill="currentColor"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.6 9.6C11.6 9.38783 11.6843 9.18435 11.8343 9.03432C11.9844 8.88429 12.1878 8.8 12.4 8.8H15.6C15.8122 8.8 16.0157 8.88429 16.1657 9.03432C16.3157 9.18435 16.4 9.38783 16.4 9.6V14.4C16.5061 14.4 16.6078 14.4421 16.6829 14.5172C16.7579 14.5922 16.8 14.6939 16.8 14.8C16.8 14.9061 16.7579 15.0078 16.6829 15.0828C16.6078 15.1579 16.5061 15.2 16.4 15.2H15.2C15.0939 15.2 14.9922 15.1579 14.9172 15.0828C14.8422 15.0078 14.8 14.9061 14.8 14.8V14C14.8 13.8939 14.7579 13.7922 14.6829 13.7172C14.6078 13.6421 14.5061 13.6 14.4 13.6H13.6C13.4939 13.6 13.3922 13.6421 13.3172 13.7172C13.2422 13.7922 13.2 13.8939 13.2 14V14.8C13.2 14.9061 13.1579 15.0078 13.0829 15.0828C13.0078 15.1579 12.9061 15.2 12.8 15.2H11.6C11.4939 15.2 11.3922 15.1579 11.3172 15.0828C11.2422 15.0078 11.2 14.9061 11.2 14.8C11.2 14.6939 11.2422 14.5922 11.3172 14.5172C11.3922 14.4421 11.4939 14.4 11.6 14.4V9.6ZM12.8 10H13.6V10.8H12.8V10ZM13.6 11.6H12.8V12.4H13.6V11.6ZM14.4 10H15.2V10.8H14.4V10ZM15.2 11.6H14.4V12.4H15.2V11.6Z" fill="white"/>
                        </svg>

                        <span className="text-black font-medium text-center">o/pro</span>
                        <span className=" bg-[#F3F4F6] px-[6px] ml-auto rounded-2xl  text-xs font-normal text-[#6B7280]">Protocol</span>
                    </div>
                    <Disclosure.Panel>
                        <button className=" w-[232px] h-10 text-base text-left text-[#111827] rounded-lg hover:bg-[#DBEAFE]">
                            <span className="py-2 pl-14">o/intro</span> 
                        </button>
                    </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}