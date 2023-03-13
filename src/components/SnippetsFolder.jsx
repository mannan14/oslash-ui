import React, { useState , Fragment } from "react";
import { Menu, Transition, Dialog } from "@headlessui/react";
import { userInfo } from "../scripts/snippets";
import { snippet } from '../scripts/snippets'
import Tippy from "@tippyjs/react"; 

import CreateNewFolderModal from "./CreateNewFolderModal";
import CreateNewFolderButton from "./CreateNewFolderButton";

const folder_select_snippet = [
    {
        foldername: 'sal',
        tag:'sales',
        users: ['user3','user4','user5','user6','john','joseph','mannan','ashwin','manav'],
    },
    {
        foldername: 'des',
        tag:'design',
        users: ['user4','user5','user6','user7','john','joseph','mannan','ashwin'],
    },
    {
        foldername: 'mine',
        tag:'',
        users: ['user4','user5','user6','user7','john','joseph','mannan','ashwin'],
    },
    {
        foldername: 'blue',
        tag:'',
        users: ['user4','user5','user6','user7','john','joseph','mannan','ashwin'],
    },
    {
        foldername: 'red',
        tag:'',
        users: ['user4','user5','user6','user7','john','joseph','mannan','ashwin'],
    },
    {
        foldername: 'gray',
        tag:'',
        users: ['user4','user5','user6','user7','john','joseph','mannan','ashwin'],
    },
]


export default function SnippetsFolder(){

    let [isOpen, setIsOpen] = useState(false)
      
    function handleKeyDown(event){
        if(event.key === '13'){
            setIsOpen(true)
        }
    }

    // let [isOpen, setIsOpen] = useState(isActive)
    
    function closeModal() {
      setIsOpen(false)
    }

    let [foldername, setFoldername] = useState('')
    let [shortcutname, setShortcutname] = useState('')
    let [disabled, setDisabled] = useState(true)

    let tooltip_foldername = false
    let tooltip_shortcutname = false

    function onCreateFolder(){
        if (foldername == '' || shortcutname == ''){
            setDisabled(true)
        }
        else {
            setDisabled(false)
            setFoldername('')
            setShortcutname('')
            closeModal()
        }
    }

    return (

        <div className="ml-10 mb-20 space-y-2">
            <p className="text-[#111827] text-sm font-medium">Select a folder</p>
            <Menu as='div' className='absolute'>
                {
                    ({ open }) => (
                        <>
                        <Menu.Button 
                            className={`${open 
                                ? `border-indigo-600`
                                : `border-[#D1D5DB]`
                                } flex h-9 w-80 justify-between items-center rounded-lg border border-solid focus:outline-none`
                                }>
                            <span className="flex space-x-2">
                                <svg className=" w-5 h-5 ml-3 text-[#111827]" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9L11 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V6Z" fill="currentColor"/>
                                </svg>
                                <p className="text-[#111827]">{userInfo.username}'s Folder</p>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            className={`${open ? `rotate-180 `: ` ` } h-5 w-5 p-1 mr-3 text-[#111827]`} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Menu.Button>
                        
                        
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className={`-top-2 transform -translate-y-full absolute pb-2 z-20 right-0 w-80 bg-white rounded-lg shadow-md focus:outline-none`}
                            >   
                                <div className=" h-56 p-2 pb-0 space-y-1 overflow-y-scroll overflow-x-hidden">
                                    {
                                        folder_select_snippet.map((val,index) => 
                                        (   
                                            <div key={index}>
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <div className={`${active ? 'bg-blue-100 ' : ' '} p-2 space-y-4 hover:bg-gray-100 focus:bg-blue-100 hover:cursor-pointer active:bg-blue-100 rounded-lg`}>
                                                            <div className='p-2 space-y-1.5'>

                                                                <div className='flex items-center'>

                                                                    <span className='flex items-center'>
                                                                        <svg className=" w-5 h-5 text-[#111827]" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9L11 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V6Z" fill="currentColor"/>
                                                                        </svg>
                                                                        <p className="ml-3 text-base font-medium text-[#111827]">o/{val.foldername}</p>
                                                                    </span>

                                                                    <span className=" bg-[#F3F4F6] px-[6px] ml-auto rounded-2xl text-xs font-normal text-[#6B7280]">
                                                                        {val.tag}
                                                                    </span>
                                                                </div>

                                                                <div className='flex '>
                                                                    <img 
                                                                    className="w-6 mr-1"
                                                                    src={`/images/${userInfo.username.toLowerCase()}.svg`} 
                                                                    alt={userInfo.username } />
                                                                    <span className="text-[#D1D5DB]">|</span>
                                                                    {
                                                                    <span className="flex flex-row ml-1 -space-x-1">
                                                                        {
                                                                            val.users.slice(0,4).map((user) => (
                                                                                <>
                                                                                    <img key={user} src={`/assets/${user}.svg`} className={`relative w-6`} alt={user} />
                                                                                </>
                                                                            ))
                                                                        }
                                                                        <span className= "flex relative z-20 w-6 h-6 text-[#111827] text-xs items-center justify-center rounded-full">
                                                                            +{val.users.length - 3}
                                                                        </span>
                                                                    </span>
                                                                    }
                                                                </div>
                                                                <p className="text-[#6B7280] font-normal text-xs">Owned by {userInfo.username}</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        ))
                                    } 
                                </div>

                                <Menu.Item className='h-10 w-full'>
                                    { 
                                    ({active}) => 
                                        // <CreateNewFolderButton
                                        //     classname={`${active ? `bg-gray-100 ` : ` `} bg-[#F9FAFB] h-10 mt-2 justify-center items-center text-[#6B7280] mx-auto w-[304px] flex rounded-lg active:bg-gray-100`}    
                                        //     textColor={'text-black'}
                                        // />
                                        <>
                                            <button 
                                                
                                                onClick={() => setIsOpen(true)}  
                                                className={`${active ? `bg-gray-100 ` : ` `} bg-[#F9FAFB] h-10 mt-2 justify-center items-center text-[#6B7280] mx-auto w-[304px] flex rounded-lg active:bg-gray-100 focus:outline-none active:outline-none `}
                                                onKeyDown={(event) => handleKeyDown(event)}
                                            >
                                                <span className={`text-black font-medium p-2`}>+</span>
                                                <span className={`text-black font-medium text-center`}>Create New</span>
                                            </button>
                                        </>
                                    }
                                </Menu.Item>

                            </Menu.Items>
                        </Transition>
                        
                        </>
                    )
                } 
            </Menu>

            <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog 
                    open={isOpen} 
                    onClose={() => setIsOpen(false)}
                    className='relative z-40'
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
                        <div className="fixed inset-0 z-40 bg-black/20" aria-hidden="true" />
                    </Transition.Child>

                    <div className="fixed z-50 inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className=' w-80 h-[252px] transform rounded-lg bg-white py-4 text-left align-middle shadow-md transition-all'>
                                    <div className="flex justify-between px-4 items-center">
                                        <Dialog.Title
                                            as="h3"
                                            className=' text-xl font-semibold text-[#111827]'
                                        >
                                            Create New Folder
                                        </Dialog.Title>

                                        <button onClick={() => setIsOpen(false)} className="text-[#6B7280]">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className=" space-y-4 pt-4 px-4">
                                        <div 
                                        className = {tooltip_shortcutname ? 'flex flex-row w-[84px] h-9 border rounded-lg focus-within:border focus-within:border-[#EF4444]'
                                        : 'flex flex-row w-[84px] h-9 border rounded-lg focus-within:border focus-within:border-[#6366F1]'
                                        }>
                                            <span className="flex rounded-l-lg text-[#6B7280] items-center justify-center w-9 bg-[#F3F4F6]">o/</span>
                                            
                                            <Tippy
                                                
                                                content={
                                                    snippet.map((value) => {
                                                        if(value.folders === shortcutname){
                                                            tooltip_shortcutname = true 
                                                            return `Prefix already exist`
                                                        }
                                                        else{
                                                            tooltip_shortcutname = false
                                                        }
                                                    })
                                                }
                                                arrow={tooltip_shortcutname && `<svg xmlns="http://www.w3.org/2000/svg" class="absolute -left-[53px] -top-3 h-5 w-5 text-[#EF4444]" viewBox="0 0 320 512" fill="currentColor">
                                                <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                                                </svg>`}
                                                className="relative left-4 -top-2 flex flex-row z-50 bg-[#EF4444] text-white rounded-sm text-xs px-2 py-[2px]"
                                                placement="bottom"
                                                visible={tooltip_shortcutname}
                                            >
                                                <input 
                                                value={shortcutname} 
                                                className={`rounded-r-lg w-14 text-sm font-normal text-center items-center justify-center overflow-hidden whitespace-nowrap text-ellipsis active:outline-none focus:outline-none`} type="text" placeholder="prefix" 
                                                onChange={ (e) => setShortcutname(e.target.value)}
                                                />                      
                                            </Tippy>
                                        </div>
                                        <Tippy
                                        
                                            content={
                                                snippet.map((value) => {
                                                    if(value.foldername === foldername){
                                                        tooltip_foldername = true 
                                                        return `Folder name already exist`
                                                    }
                                                    else{
                                                        tooltip_foldername = false
                                                    }
                                                })
                                            }
                                            arrow={tooltip_foldername && `<svg xmlns="http://www.w3.org/2000/svg" class="absolute -left-[70px] -top-7 h-5 w-5 text-[#EF4444]" viewBox="0 0 320 512" fill="currentColor">
                                            <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                                            </svg>`}
                                            className={`relative -left-5 -top-2 bg-[#EF4444] text-white rounded-sm text-xs px-2 py-[2px]`}
                                            placement="bottom"
                                            visible={tooltip_foldername}
                                        >
                                            <input
                                            value={foldername}
                                            className= {tooltip_foldername ? 'rounded-lg p-2 border border-[#D1D5DB] text-sm font-normal placeholder:text-[#9CA3AF] focus:outline-none focus:border focus:border-[#EF4444]'
                                            : 'rounded-lg p-2 border border-[#D1D5DB] text-sm font-normal placeholder:text-[#9CA3AF] focus:outline-none focus:border focus:border-[#6366F1]'}
                                            type="text" 
                                            placeholder="Folder name" 
                                            onChange={(e)=> setFoldername(e.target.value)}/>

                                        </Tippy>
                                        
                                        <h5 className=" text-xs text-[#6B7280]">Note:</h5>

                                        <div className="flex justify-end w-full">
                                            <button
                                            onClick={onCreateFolder}
                                            disabled={tooltip_foldername&&disabled&&tooltip_shortcutname}
                                            className="mb-2 rounded-md border border-transparent bg-black text-white px-4 py-2 text-sm font-medium focus:outline-none disabled:bg-slate-800"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>  
        </div>
    )
}
