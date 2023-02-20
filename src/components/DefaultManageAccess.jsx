import React from "react";


export default function DefaultManageAccess({users}) {
    return (
        <>
        {
            users.map( (user) => 
                (user.name === users[0].name) ? null :
                <div key={user.name} className="flex items-center p-1">
                    <img src={'/images/mannan.svg'} className="" alt="" />
                    <h3 className="overflow-hidden px-2 whitespace-nowrap text-ellipsis">{user.name}</h3>
                    <span className="px-[6px] ml-auto text-xs text-[#6B7280] font-normal">Viewer</span>
                </div>
            )
        }
        </>
    )
}