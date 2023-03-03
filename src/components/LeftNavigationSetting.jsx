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
                        <Menu.Button className={`focus:outline-none w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg`}>
                            <svg className= {`${open ?  ``:``} w-6 text-[#6B7280]`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.788 3.80399C13.332 1.93199 10.668 1.93199 10.212 3.80399C10.144 4.08529 10.0104 4.34654 9.8223 4.56649C9.63418 4.78643 9.39679 4.95885 9.12944 5.06972C8.8621 5.18058 8.57236 5.22677 8.28379 5.2045C7.99523 5.18224 7.716 5.09216 7.46883 4.94159C5.82243 3.93839 3.93843 5.82239 4.94163 7.46879C5.58963 8.53199 5.01483 9.91919 3.80523 10.2132C1.93203 10.668 1.93203 13.3332 3.80523 13.7868C4.0866 13.855 4.3479 13.9886 4.56784 14.1769C4.78779 14.3651 4.96016 14.6027 5.07092 14.8702C5.18168 15.1377 5.2277 15.4275 5.20523 15.7162C5.18277 16.0048 5.09245 16.2841 4.94163 16.5312C3.93843 18.1776 5.82243 20.0616 7.46883 19.0584C7.71596 18.9076 7.99521 18.8173 8.28385 18.7948C8.57249 18.7723 8.86236 18.8183 9.12985 18.9291C9.39733 19.0399 9.63488 19.2122 9.82314 19.4322C10.0114 19.6521 10.1451 19.9134 10.2132 20.1948C10.668 22.068 13.3332 22.068 13.7868 20.1948C13.8552 19.9136 13.989 19.6524 14.1773 19.4327C14.3656 19.2129 14.6031 19.0406 14.8705 18.9299C15.1379 18.8192 15.4277 18.7731 15.7163 18.7954C16.0048 18.8177 16.284 18.9078 16.5312 19.0584C18.1776 20.0616 20.0616 18.1776 19.0584 16.5312C18.9079 16.284 18.8178 16.0048 18.7954 15.7162C18.7731 15.4277 18.8192 15.1379 18.9299 14.8705C19.0406 14.6031 19.2129 14.3656 19.4327 14.1773C19.6525 13.989 19.9136 13.8552 20.1948 13.7868C22.068 13.332 22.068 10.6668 20.1948 10.2132C19.9135 10.145 19.6522 10.0114 19.4322 9.82311C19.2123 9.63484 19.0399 9.3973 18.9291 9.12981C18.8184 8.86232 18.7724 8.57246 18.7948 8.28382C18.8173 7.99518 18.9076 7.71592 19.0584 7.46879C20.0616 5.82239 18.1776 3.93839 16.5312 4.94159C16.2841 5.09241 16.0048 5.18273 15.7162 5.2052C15.4276 5.22766 15.1377 5.18164 14.8702 5.07088C14.6027 4.96012 14.3652 4.78775 14.1769 4.56781C13.9887 4.34786 13.855 4.08657 13.7868 3.80519L13.788 3.80399ZM12 15.6C12.9548 15.6 13.8705 15.2207 14.5456 14.5456C15.2207 13.8704 15.6 12.9548 15.6 12C15.6 11.0452 15.2207 10.1295 14.5456 9.45441C13.8705 8.77928 12.9548 8.39999 12 8.39999C11.0453 8.39999 10.1296 8.77928 9.45445 9.45441C8.77931 10.1295 8.40003 11.0452 8.40003 12C8.40003 12.9548 8.77931 13.8704 9.45445 14.5456C10.1296 15.2207 11.0453 15.6 12 15.6Z" fill="#6B7280"/>
                            </svg>
                        </Menu.Button>
                        <Menu.Items className="absolute left-3 bottom-14 z-10 w-[162px] rounded-lg p-2 bg-white shadow-md focus:outline-none active:outline-none">
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