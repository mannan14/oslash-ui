import React from "react";
import OwnerDropdown from '../components/OwnerDropdown'
import DefaultManageAccess from "./DefaultManageAccess";
import { snippet } from "../scripts/snippets";

const users = [
    {avatar: '/images/salman.svg',name: 'Salman',owner: true, },
    {avatar: '/images/mannan.svg',name: 'Mannan',owner: false, },
    {avatar: '/images/salman.svg',name: 'Suhail',owner: false, },
]

export default function ManageAccess({name}){
return (
    <div>    
        {
            (name === snippet[0].folders) ? 
            (   
                <>
                    <OwnerDropdown users={users}/>
                    <p className="text-center mx-2 my-2 text-sm text-[#667085]">
                        This folder cannot be shared with other members
                    </p>
                </>
            )
            :
            (   
                <>    
                    <OwnerDropdown users={users}/>
                    <DefaultManageAccess users={users} />
                </>
            )
        }
    </div>
)
}