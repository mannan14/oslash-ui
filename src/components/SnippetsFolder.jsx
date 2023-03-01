import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { userInfo } from "../scripts/snippets";

import CreateNewFolder from "./CreateNewFolder";

const folder_select_snippet = [
    {
        foldername: 'o/sal',
        tag:'sales',
        users: ['user3','user4','user5','user6','john','joseph','mannan','ashwin','manav'],
    },
    {
        foldername: 'o/des',
        tag:'design',
        users: ['user4','user5','user6','user7','john','joseph','mannan','ashwin'],
    },
    {
        foldername: 'o/des',
        tag:'',
        users: ['user4','user5','user6','user7','john','joseph','mannan','ashwin'],
    },
    {
        foldername: 'o/des',
        tag:'',
        users: ['user4','user5','user6','user7','john','joseph','mannan','ashwin'],
    },
    {
        foldername: 'o/des',
        tag:'',
        users: ['user4','user5','user6','user7','john','joseph','mannan','ashwin'],
    },
    {
        foldername: 'o/des',
        tag:'',
        users: ['user4','user5','user6','user7','john','joseph','mannan','ashwin'],
    },
]

export default function SnippetsFolder(){
    return (

<div className="pl-10 pb-20 space-y-2">
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
                                className={`${open ? `rotate-180 `: ` ` } h-5 w-5 p-1 text-[#111827]`} viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Menu.Button>
                            
                            {
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
                                    className={`-top-2 transform -translate-y-full absolute z-10 right-0 w-80 bg-white rounded-lg shadow-md focus:outline-none`}
                                >   
                                    <div className="h-72 p-2 overflow-y-scroll overflow-x-hidden">
                                        {
                                            folder_select_snippet.map((val) => (
                                                
                                                <Menu.Item key={val.foldername} >
                                                    { ({active}) => (

                                                        <div className={`${active ? 'bg-blue-100 ' : ' '} space-y-4 hover:bg-gray-100 focus:bg-blue-100 hover:cursor-pointer active:bg-blue-100 rounded-lg`}>
                                                            <div className='p-2 space-y-1.5'>

                                                                <div className='flex items-center'>
                                                                    <span className='flex items-center'>
                                                                        <svg className=" w-5 h-5 text-[#111827]" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9L11 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V6Z" fill="currentColor"/>
                                                                        </svg>
                                                                        <p className="ml-3 text-base font-medium text-[#111827]">{val.foldername}</p>
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
                                            ))
                                        }
                                    </div> 
                                    <Menu.Item className='h-10'>
                                        { ({active}) => (
                                            <CreateNewFolder 
                                                className={`${active ? `bg-gray-100 ` : ` `}bg-[#F9FAFB] h-10 mt-2 justify-center items-center text-[#6B7280] mx-auto w-[304px] flex rounded-lg active:bg-gray-100`}
                                                />
                                        )
                                        }
                                    </Menu.Item>
                                </Menu.Items>
                                </Transition>
                            }
                            </>
                        )
                    } 
                </Menu>
            </div>
    )
}
