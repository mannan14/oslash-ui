import React from "react";
import avatar from '../assets/Avatar.png'
import avatar1 from '../assets/Avatar-1.png'
import avatar2 from '../assets/Avatar-2.png'

export default function personalFolder({Foldername, name}){
    return (
        <div className=" flex flex-col h-full items-center justify-center">
            <div className="w-[338px] pb-20">
                {
                (name === 'untitle') ? (
                    <div>
                        <div className="flex items-end relative my-4">
                            <img src={avatar} className="absolute left-28  w-12 h-12" alt="" />
                            <img src={avatar2} className="absolute left-36 z-10 w-14 h-14" alt="" />
                            <img src={avatar1} className="absolute left-[185px] w-12 h-12" alt="" />
                        </div>
                        <h2 className=" font-semibold text-lg text-center text-[#101828]">Invite Collaborators</h2>
                        <p className="text-[#667085] text-center text-sm"> 
                            Invite colleagues to collaborate on this folder
                            by adding them under manage access
                        </p>
                    </div>
                ) 
                :
                (
                    <div>
                        <h2 className=" font-semibold text-lg text-center text-[#101828]">Hello {name} </h2>
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
                }
            </div>
        </div>
    )
}