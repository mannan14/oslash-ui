import React from "react";
import navicon from '../assets/Nav-icon.svg'
import logo from '../assets/logo.png'


export default function LeftNavigation(){
    return(
        <>
        <div className="w-14 h-screen absolute top-0 z-10 bg-[#F9FAFB] flex flex-col justify-between">
            <div className="flex flex-col list-none">
                
                <img src={logo} className="w-14 h-12" alt=""/>
                
                <div className="flex flex-col m-2 text-center items-center">
                    <a href="">
                        <img src={navicon} alt="" className="p-2 rounded-lg hover:bg-gray-100 active:bg-blue-100"/>
                    </a>
                    <h3 className="text-center mt-1 text-[8px] font-medium leading-3">Snippets</h3>
                </div>

                <div className="mt-5 space-y-1">
                    <a href="" className="">
                        <svg className="text-[#6B7280] w-10 mx-auto p-2 rounded-lg hover:bg-gray-100 active:bg-blue-100" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.1032 5.5032C15.3246 5.27398 15.5894 5.09114 15.8822 4.96536C16.175 4.83958 16.49 4.77337 16.8086 4.7706C17.1273 4.76783 17.4433 4.82856 17.7383 4.94923C18.0332 5.0699 18.3012 5.24811 18.5265 5.47345C18.7519 5.6988 18.9301 5.96676 19.0508 6.26171C19.1714 6.55666 19.2322 6.87269 19.2294 7.19136C19.2266 7.51004 19.1604 7.82496 19.0346 8.11777C18.9088 8.41058 18.726 8.67541 18.4968 8.8968L14.8968 12.4968C14.4467 12.9467 13.8364 13.1995 13.2 13.1995C12.5636 13.1995 11.9533 12.9467 11.5032 12.4968C11.2769 12.2782 10.9737 12.1573 10.6591 12.16C10.3445 12.1627 10.0435 12.2889 9.821 12.5114C9.59852 12.7339 9.47231 13.0349 9.46958 13.3495C9.46684 13.6642 9.5878 13.9673 9.80639 14.1936C10.7065 15.0935 11.9272 15.599 13.2 15.599C14.4728 15.599 15.6935 15.0935 16.5936 14.1936L20.1936 10.5936C21.0679 9.68831 21.5518 8.47582 21.5408 7.21728C21.5299 5.95873 21.0251 4.75483 20.1351 3.86487C19.2452 2.97491 18.0413 2.4701 16.7827 2.45917C15.5242 2.44823 14.3117 2.93204 13.4064 3.8064L11.6064 5.6064C11.4918 5.7171 11.4004 5.84951 11.3375 5.99592C11.2746 6.14232 11.2415 6.29978 11.2401 6.45912C11.2387 6.61846 11.2691 6.77647 11.3294 6.92395C11.3897 7.07142 11.4788 7.2054 11.5915 7.31808C11.7042 7.43075 11.8382 7.51985 11.9856 7.58019C12.1331 7.64052 12.2911 7.67089 12.4505 7.6695C12.6098 7.66812 12.7673 7.63501 12.9137 7.57212C13.0601 7.50923 13.1925 7.41781 13.3032 7.3032L15.1032 5.5032ZM9.10319 11.5032C9.55325 11.0533 10.1636 10.8005 10.8 10.8005C11.4364 10.8005 12.0467 11.0533 12.4968 11.5032C12.6075 11.6178 12.7399 11.7092 12.8863 11.7721C13.0327 11.835 13.1902 11.8681 13.3495 11.8695C13.5088 11.8709 13.6669 11.8405 13.8143 11.7802C13.9618 11.7199 14.0958 11.6307 14.2085 11.5181C14.3211 11.4054 14.4102 11.2714 14.4706 11.1239C14.5309 10.9765 14.5613 10.8185 14.5599 10.6591C14.5585 10.4998 14.5254 10.3423 14.4625 10.1959C14.3996 10.0495 14.3082 9.9171 14.1936 9.8064C13.2935 8.90654 12.0728 8.40103 10.8 8.40103C9.5272 8.40103 8.30652 8.90654 7.40639 9.8064L3.80639 13.4064C3.34794 13.8492 2.98226 14.3788 2.7307 14.9645C2.47914 15.5501 2.34672 16.1799 2.34118 16.8173C2.33565 17.4546 2.45709 18.0867 2.69844 18.6766C2.93979 19.2665 3.29621 19.8024 3.74689 20.2531C4.19758 20.7038 4.73351 21.0602 5.32341 21.3015C5.91331 21.5429 6.54537 21.6643 7.18271 21.6588C7.82005 21.6533 8.44991 21.5209 9.03553 21.2693C9.62115 21.0177 10.1508 20.6521 10.5936 20.1936L12.3936 18.3936C12.5082 18.2829 12.5996 18.1505 12.6625 18.0041C12.7254 17.8577 12.7585 17.7002 12.7599 17.5409C12.7613 17.3815 12.7309 17.2235 12.6706 17.0761C12.6102 16.9286 12.5211 16.7946 12.4085 16.6819C12.2958 16.5693 12.1618 16.4802 12.0143 16.4198C11.8669 16.3595 11.7088 16.3291 11.5495 16.3305C11.3902 16.3319 11.2327 16.365 11.0863 16.4279C10.9399 16.4908 10.8075 16.5822 10.6968 16.6968L8.89679 18.4968C8.67539 18.726 8.41057 18.9089 8.11776 19.0346C7.82495 19.1604 7.51002 19.2266 7.19135 19.2294C6.87268 19.2322 6.55665 19.1714 6.2617 19.0508C5.96675 18.9301 5.69878 18.7519 5.47344 18.5266C5.2481 18.3012 5.06989 18.0332 4.94921 17.7383C4.82854 17.4433 4.76782 17.1273 4.77059 16.8086C4.77336 16.49 4.83956 16.175 4.96534 15.8822C5.09113 15.5894 5.27396 15.3246 5.50319 15.1032L9.10319 11.5032Z" fill="currentColor"/>
                        </svg>
                    </a>
                    <h3 className="text-[8px] text-center font-normal leading-3">Shortcuts</h3>                  
                </div>
            </div>
            <svg className= "mx-auto mb-6 w-10 text-[#6B7280]" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.788 11.804C21.332 9.93202 18.668 9.93202 18.212 11.804C18.144 12.0853 18.0104 12.3466 17.8223 12.5665C17.6342 12.7865 17.3968 12.9589 17.1294 13.0697C16.8621 13.1806 16.5724 13.2268 16.2838 13.2045C15.9952 13.1823 15.716 13.0922 15.4688 12.9416C13.8224 11.9384 11.9384 13.8224 12.9416 15.4688C13.5896 16.532 13.0148 17.9192 11.8052 18.2132C9.93203 18.668 9.93203 21.3332 11.8052 21.7868C12.0866 21.855 12.3479 21.9886 12.5678 22.1769C12.7878 22.3652 12.9602 22.6027 13.0709 22.8702C13.1817 23.1377 13.2277 23.4276 13.2052 23.7162C13.1828 24.0048 13.0924 24.2841 12.9416 24.5312C11.9384 26.1776 13.8224 28.0616 15.4688 27.0584C15.716 26.9076 15.9952 26.8173 16.2839 26.7948C16.5725 26.7724 16.8624 26.8184 17.1298 26.9291C17.3973 27.0399 17.6349 27.2123 17.8231 27.4322C18.0114 27.6522 18.1451 27.9135 18.2132 28.1948C18.668 30.068 21.3332 30.068 21.7868 28.1948C21.8552 27.9136 21.989 27.6525 22.1773 27.4327C22.3656 27.2129 22.6031 27.0406 22.8705 26.9299C23.1379 26.8192 23.4277 26.7731 23.7163 26.7954C24.0048 26.8178 24.284 26.9079 24.5312 27.0584C26.1776 28.0616 28.0616 26.1776 27.0584 24.5312C26.9079 24.284 26.8178 24.0048 26.7954 23.7163C26.7731 23.4277 26.8192 23.1379 26.9299 22.8705C27.0406 22.6031 27.2129 22.3656 27.4327 22.1773C27.6525 21.989 27.9136 21.8552 28.1948 21.7868C30.068 21.332 30.068 18.6668 28.1948 18.2132C27.9135 18.1451 27.6522 18.0114 27.4322 17.8231C27.2123 17.6349 27.0399 17.3973 26.9291 17.1298C26.8184 16.8624 26.7724 16.5725 26.7948 16.2838C26.8173 15.9952 26.9076 15.716 27.0584 15.4688C28.0616 13.8224 26.1776 11.9384 24.5312 12.9416C24.2841 13.0924 24.0048 13.1828 23.7162 13.2052C23.4276 13.2277 23.1377 13.1817 22.8702 13.0709C22.6027 12.9602 22.3652 12.7878 22.1769 12.5678C21.9887 12.3479 21.855 12.0866 21.7868 11.8052L21.788 11.804ZM20 23.6C20.9548 23.6 21.8705 23.2207 22.5456 22.5456C23.2207 21.8705 23.6 20.9548 23.6 20C23.6 19.0452 23.2207 18.1296 22.5456 17.4544C21.8705 16.7793 20.9548 16.4 20 16.4C19.0453 16.4 18.1296 16.7793 17.4544 17.4544C16.7793 18.1296 16.4 19.0452 16.4 20C16.4 20.9548 16.7793 21.8705 17.4544 22.5456C18.1296 23.2207 19.0453 23.6 20 23.6Z" fill="currentColor"/>
            </svg>
        </div>
        </>
    )
}