import React from "react";
import { Menu } from "@headlessui/react";

const settingValues = [
    {href:'/General', label:'General'},
    {href:'/ManageTeams', label:'Manage Teams'},
    {href:'/Plans', label:'Plans'}, 
    {href:'/Billing', label:'Billing'}, 
    {href:'/Security', label:'Security'}, 
]

export default function LeftNavigationSetting(){
    return (
        <Menu>
                {
                    ({open}) => 
                    (
                    <>
                        <Menu.Button className={`focus:outline-none`}>
                            <svg className= {`${open ?  ``:``} mx-auto w-9 text-[#6B7280] hover:bg-gray-100 rounded-lg`} viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.788 11.804C21.332 9.93202 18.668 9.93202 18.212 11.804C18.144 12.0853 18.0104 12.3466 17.8223 12.5665C17.6342 12.7865 17.3968 12.9589 17.1294 13.0697C16.8621 13.1806 16.5724 13.2268 16.2838 13.2045C15.9952 13.1823 15.716 13.0922 15.4688 12.9416C13.8224 11.9384 11.9384 13.8224 12.9416 15.4688C13.5896 16.532 13.0148 17.9192 11.8052 18.2132C9.93203 18.668 9.93203 21.3332 11.8052 21.7868C12.0866 21.855 12.3479 21.9886 12.5678 22.1769C12.7878 22.3652 12.9602 22.6027 13.0709 22.8702C13.1817 23.1377 13.2277 23.4276 13.2052 23.7162C13.1828 24.0048 13.0924 24.2841 12.9416 24.5312C11.9384 26.1776 13.8224 28.0616 15.4688 27.0584C15.716 26.9076 15.9952 26.8173 16.2839 26.7948C16.5725 26.7724 16.8624 26.8184 17.1298 26.9291C17.3973 27.0399 17.6349 27.2123 17.8231 27.4322C18.0114 27.6522 18.1451 27.9135 18.2132 28.1948C18.668 30.068 21.3332 30.068 21.7868 28.1948C21.8552 27.9136 21.989 27.6525 22.1773 27.4327C22.3656 27.2129 22.6031 27.0406 22.8705 26.9299C23.1379 26.8192 23.4277 26.7731 23.7163 26.7954C24.0048 26.8178 24.284 26.9079 24.5312 27.0584C26.1776 28.0616 28.0616 26.1776 27.0584 24.5312C26.9079 24.284 26.8178 24.0048 26.7954 23.7163C26.7731 23.4277 26.8192 23.1379 26.9299 22.8705C27.0406 22.6031 27.2129 22.3656 27.4327 22.1773C27.6525 21.989 27.9136 21.8552 28.1948 21.7868C30.068 21.332 30.068 18.6668 28.1948 18.2132C27.9135 18.1451 27.6522 18.0114 27.4322 17.8231C27.2123 17.6349 27.0399 17.3973 26.9291 17.1298C26.8184 16.8624 26.7724 16.5725 26.7948 16.2838C26.8173 15.9952 26.9076 15.716 27.0584 15.4688C28.0616 13.8224 26.1776 11.9384 24.5312 12.9416C24.2841 13.0924 24.0048 13.1828 23.7162 13.2052C23.4276 13.2277 23.1377 13.1817 22.8702 13.0709C22.6027 12.9602 22.3652 12.7878 22.1769 12.5678C21.9887 12.3479 21.855 12.0866 21.7868 11.8052L21.788 11.804ZM20 23.6C20.9548 23.6 21.8705 23.2207 22.5456 22.5456C23.2207 21.8705 23.6 20.9548 23.6 20C23.6 19.0452 23.2207 18.1296 22.5456 17.4544C21.8705 16.7793 20.9548 16.4 20 16.4C19.0453 16.4 18.1296 16.7793 17.4544 17.4544C16.7793 18.1296 16.4 19.0452 16.4 20C16.4 20.9548 16.7793 21.8705 17.4544 22.5456C18.1296 23.2207 19.0453 23.6 20 23.6Z" fill="currentColor"/>
                            </svg>
                        </Menu.Button>
                        <Menu.Items className="absolute left-3 bottom-16 z-10 w-[162px] rounded-lg p-2 bg-white shadow-md focus:outline-none active:outline-none">
                            <div className="flex flex-col">
                                {
                                    settingValues.map((value) => 
                                    (
                                        <Menu.Item key={value.href}>
                                                {
                                                    ({active}) => (
                                                        <button
                                                        className={`${active ? `bg-gray-100 ` :` `} text-[#111827] hover:bg-[#F9FAFB] focus:bg-blue-100 rounded text-base text-left p-2 leading-5`}
                                                        href="#"
                                                        >
                                                            {value.label}
                                                        </button>
                                                    )
                                                } 
                                            </Menu.Item>
                                        ))
                                    }
                                </div>
                        </Menu.Items>
                    </>
                    )
                }
            </Menu>
    )
}