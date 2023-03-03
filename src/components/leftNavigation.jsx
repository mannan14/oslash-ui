import React,{useState} from "react";
import logo from '../assets/logo.png'

import LeftNavigationSetting from "./LeftNavigationSetting";


export default function LeftNavigation(){

    let [activeTab, setActiveTab] = useState('Snippets')

    return(
        <div className="flex flex-col w-[56px] bg-gray-50">
            <span className="flex items-center justify-center py-1 w-full px-auto ">
                <img src={logo} className="" alt=""/>
            </span>
                
            <div className="flex flex-col h-full p-2 justify-between">

                <div className="">
                    <button 
                    className={`group flex flex-col text-center items-center hover:cursor-pointer`}
                    onClick={()=>{setActiveTab("Snippets")}}
                    >
                        <svg className={`${activeTab === `Snippets` ? `text-black bg-blue-100` : `text-gray-500 group-hover:bg-gray-100 group-active:bg-blue-100 group-hover:text-gray-900`} p-2 w-10 h-10 rounded-lg`}
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4749 3.59998L7.60404 11.967H3.59998L7.46432 3.59998H11.4749Z" fill="currentColor"/>
                            <path d="M11.721 11.967L7.8566 20.3342H3.84607L7.70969 11.967H11.721Z" fill="currentColor"/>
                            <path d="M18.2876 5.44626L13.3321 5.43417L13.043 4.35541L17.9986 4.36749L18.2876 5.44626Z" fill="currentColor"/>
                            <path d="M20.7429 8.27913L12.0101 8.26706L11.721 7.18829L20.4539 7.20036L20.7429 8.27913Z" fill="currentColor"/>
                            <path d="M19.4208 11.112L10.688 11.0999L10.3989 10.0211L19.1317 10.0332L19.4208 11.112Z" fill="currentColor"/>
                        </svg>
                        <h3 className={`${activeTab === `Snippets` ? `text-black`  : `text-gray-500 group-hover:text-black`} text-center mt-1 text-[8px] font-medium leading-3`}>
                            Snippets
                        </h3>
                    </button>
                
                    <button 
                    onClick={()=>{setActiveTab("Shortcuts")}}
                    className={`group pt-3 hover:cursor-pointer`}
                    >
                        <svg className={`${activeTab === `Shortcuts` ? `text-gray-900 bg-blue-100 hover:bg-blue-100` : `text-gray-500 group-hover:text-gray-900 group-hover:bg-gray-100 group-active:bg-blue-100`} w-10 p-2 rounded-lg `} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.1032 5.5032C15.3246 5.27398 15.5894 5.09114 15.8822 4.96536C16.175 4.83958 16.49 4.77337 16.8086 4.7706C17.1273 4.76783 17.4433 4.82856 17.7383 4.94923C18.0332 5.0699 18.3012 5.24811 18.5265 5.47345C18.7519 5.6988 18.9301 5.96676 19.0508 6.26171C19.1714 6.55666 19.2322 6.87269 19.2294 7.19136C19.2266 7.51004 19.1604 7.82496 19.0346 8.11777C18.9088 8.41058 18.726 8.67541 18.4968 8.8968L14.8968 12.4968C14.4467 12.9467 13.8364 13.1995 13.2 13.1995C12.5636 13.1995 11.9533 12.9467 11.5032 12.4968C11.2769 12.2782 10.9737 12.1573 10.6591 12.16C10.3445 12.1627 10.0435 12.2889 9.821 12.5114C9.59852 12.7339 9.47231 13.0349 9.46958 13.3495C9.46684 13.6642 9.5878 13.9673 9.80639 14.1936C10.7065 15.0935 11.9272 15.599 13.2 15.599C14.4728 15.599 15.6935 15.0935 16.5936 14.1936L20.1936 10.5936C21.0679 9.68831 21.5518 8.47582 21.5408 7.21728C21.5299 5.95873 21.0251 4.75483 20.1351 3.86487C19.2452 2.97491 18.0413 2.4701 16.7827 2.45917C15.5242 2.44823 14.3117 2.93204 13.4064 3.8064L11.6064 5.6064C11.4918 5.7171 11.4004 5.84951 11.3375 5.99592C11.2746 6.14232 11.2415 6.29978 11.2401 6.45912C11.2387 6.61846 11.2691 6.77647 11.3294 6.92395C11.3897 7.07142 11.4788 7.2054 11.5915 7.31808C11.7042 7.43075 11.8382 7.51985 11.9856 7.58019C12.1331 7.64052 12.2911 7.67089 12.4505 7.6695C12.6098 7.66812 12.7673 7.63501 12.9137 7.57212C13.0601 7.50923 13.1925 7.41781 13.3032 7.3032L15.1032 5.5032ZM9.10319 11.5032C9.55325 11.0533 10.1636 10.8005 10.8 10.8005C11.4364 10.8005 12.0467 11.0533 12.4968 11.5032C12.6075 11.6178 12.7399 11.7092 12.8863 11.7721C13.0327 11.835 13.1902 11.8681 13.3495 11.8695C13.5088 11.8709 13.6669 11.8405 13.8143 11.7802C13.9618 11.7199 14.0958 11.6307 14.2085 11.5181C14.3211 11.4054 14.4102 11.2714 14.4706 11.1239C14.5309 10.9765 14.5613 10.8185 14.5599 10.6591C14.5585 10.4998 14.5254 10.3423 14.4625 10.1959C14.3996 10.0495 14.3082 9.9171 14.1936 9.8064C13.2935 8.90654 12.0728 8.40103 10.8 8.40103C9.5272 8.40103 8.30652 8.90654 7.40639 9.8064L3.80639 13.4064C3.34794 13.8492 2.98226 14.3788 2.7307 14.9645C2.47914 15.5501 2.34672 16.1799 2.34118 16.8173C2.33565 17.4546 2.45709 18.0867 2.69844 18.6766C2.93979 19.2665 3.29621 19.8024 3.74689 20.2531C4.19758 20.7038 4.73351 21.0602 5.32341 21.3015C5.91331 21.5429 6.54537 21.6643 7.18271 21.6588C7.82005 21.6533 8.44991 21.5209 9.03553 21.2693C9.62115 21.0177 10.1508 20.6521 10.5936 20.1936L12.3936 18.3936C12.5082 18.2829 12.5996 18.1505 12.6625 18.0041C12.7254 17.8577 12.7585 17.7002 12.7599 17.5409C12.7613 17.3815 12.7309 17.2235 12.6706 17.0761C12.6102 16.9286 12.5211 16.7946 12.4085 16.6819C12.2958 16.5693 12.1618 16.4802 12.0143 16.4198C11.8669 16.3595 11.7088 16.3291 11.5495 16.3305C11.3902 16.3319 11.2327 16.365 11.0863 16.4279C10.9399 16.4908 10.8075 16.5822 10.6968 16.6968L8.89679 18.4968C8.67539 18.726 8.41057 18.9089 8.11776 19.0346C7.82495 19.1604 7.51002 19.2266 7.19135 19.2294C6.87268 19.2322 6.55665 19.1714 6.2617 19.0508C5.96675 18.9301 5.69878 18.7519 5.47344 18.5266C5.2481 18.3012 5.06989 18.0332 4.94921 17.7383C4.82854 17.4433 4.76782 17.1273 4.77059 16.8086C4.77336 16.49 4.83956 16.175 4.96534 15.8822C5.09113 15.5894 5.27396 15.3246 5.50319 15.1032L9.10319 11.5032Z" fill="currentColor"/>
                        </svg>
                        <h3 className={`${activeTab === `Shortcuts` ? `text-gray-900 ` : `text-gray-500 group-hover:text-black`} text-center mt-1 text-[8px] font-medium leading-3`}>
                            Shortcuts
                        </h3>
                    </button>
                </div> 

                <LeftNavigationSetting/>
            </div>
            
        </div>
    )
}