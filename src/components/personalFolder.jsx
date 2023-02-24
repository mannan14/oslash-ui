import React from "react";

import DefaultFolder from './DefaultFolder'
import { snippet } from "../scripts/snippets";

// name = user
export default function PersonalFolder({FolderValue, user}){
    return (
        <>
        {/* flex flex-col h-full items-center justify-center */}
            <div className="flex flex-col h-full w-full items-center justify-center">
                <div className="w-[338px] pb-20">
                    {
                    (FolderValue === snippet[0].foldername) ?  
                        ( 
                        <div className=" space-y-3">
                            <h2 className=" font-semibold text-lg text-center text-[#101828]">Hello {user} </h2>
                            <p className="text-[#667085] text-center text-sm">
                            This is your personal folder where you can create
                            Snippets for your own use
                            </p>

                            <p className="text-[#667085] text-center text-sm">
                            You cannot share this folder with other members. 
                            To share Snippets create a new folder and add them to it
                            </p>
                        </div>
                            
                        )
                    :
                    (
                        <DefaultFolder/>
                    )
                    }
                </div>
            </div>
        </>
    )
}
