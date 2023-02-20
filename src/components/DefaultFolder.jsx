import React from "react";
import avatar from '../assets/Avatar.png'
import avatar1 from '../assets/Avatar-1.png'
import avatar2 from '../assets/Avatar-2.png'

const UntitledFolder = () =>  {
    return (
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
}

export default UntitledFolder