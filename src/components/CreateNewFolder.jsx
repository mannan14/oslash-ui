import React from "react";
import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { snippet } from '../scripts/snippets'
import Tippy from "@tippyjs/react"; 

export default function CreateNewFolder(){
    let [isOpen, setIsOpen] = useState(false)
    let completeButtonRef = useRef(null)

    function closeModal(){
        setIsOpen(false)
    }

    function openModal(){
        setIsOpen(true)
    }

    function onCreateFolder(){

        closeModal()
    }
    return (
        <>
            <button onClick={openModal} className="bg-[#4F46E5] hover:bg-[#4e46e5eb] mt-2 w-[232px] h-10 p-2 flex items-center rounded-lg">
                <span className="text-white font-medium px-2">+</span>
                <span className=" text-white font-medium text-center">Create New</span>
            </button>
            
            <Transition appear show={isOpen}>
                <Dialog 
                    initialFocus={completeButtonRef}
                    open={isOpen} 
                    onClose={closeModal}
                >
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
                    </Transition.Child>

                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className='absolute z-10 top-[256.8px] left-[635px] w-80 h-[252px] transform rounded-lg bg-white py-4 text-left align-middle shadow-md transition-all'>
                            <div className="flex justify-between px-4 items-center">
                                <Dialog.Title
                                    as="h3"
                                    className=' text-xl font-semibold text-[#111827]'
                                >
                                    Create New Folder
                                </Dialog.Title>
                                <button onClick={closeModal} className="text-[#6B7280]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className=" space-y-4 pt-4 px-4">

                                <div className="flex flex-row w-[84px] h-9 border rounded-lg">
                                    <div className="flex flex-row w-full rounded-lg focus-within:border focus-within:border-[#6366F1]">
                                        <span className="flex rounded-l-lg text-[#6B7280] items-center justify-center w-9 bg-[#F3F4F6]">o/</span>
                                        <Tippy
                                            content="Prefix already exist"
                                            arrow='<svg xmlns="http://www.w3.org/2000/svg" class="absolute -left-[53px] -top-3 h-5 w-5 text-[#EF4444]" viewBox="0 0 320 512" fill="currentColor">
                                            <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                                            </svg>'
                                            className="relative left-4 -top-2 flex flex-row z-50 bg-[#EF4444] text-white rounded-sm text-xs px-2 py-[2px]"
                                            placement="bottom"
                                            trigger="click"
                                            // visible={false}
                                        >
                                            <input id="shortcut_name" className="rounded-r-lg w-14 text-sm font-normal text-center items-center justify-center overflow-hidden whitespace-nowrap text-ellipsis active:outline-none focus:outline-none" type="text" placeholder="prefix" />                       
                                        </Tippy>
                                    </div>
                                </div>
                                    <Tippy
                                        content="Folder name already exist"
                                        arrow='<svg xmlns="http://www.w3.org/2000/svg" class="absolute -left-[73px] -top-7 h-5 w-5 text-[#EF4444]" viewBox="0 0 320 512" fill="currentColor">
                                        <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                                        </svg>'
                                        className="relative -left-4 -top-2 bg-[#EF4444] text-white rounded-sm text-xs px-2 py-[2px]"
                                        placement="bottom"
                                        trigger="click"
                                        // visible={false}
                                    >
                                        <input id="folder_name" className=" rounded-lg p-2 border border-[#D1D5DB] text-sm font-normal placeholder:text-[#9CA3AF] focus:outline-none focus:border focus:border-[#6366F1] " type="text" placeholder="Folder name" />
                                    </Tippy>
                                    
                                <h5 className=" text-xs text-[#6B7280]">Note:</h5>

                                <div className="flex justify-end w-full">
                                    <button
                                    className="mb-2 rounded-md border border-transparent bg-black text-white px-4 py-2 text-sm font-medium focus:outline-none"
                                    onClick={onCreateFolder}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    )
}