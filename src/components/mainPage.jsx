import React from "react"
import RightNavigation from '../components/rightNavigation'
import FolderName from '../components/folderName'
import PersonalFolder from '../components/personalFolder'

export default function mainPage(){
    return(
        <div className="absolute flex flex-row right-0 left-[304px] ">
            <div className="flex flex-col w-4/5">
                <FolderName />
                <PersonalFolder />
            </div>
            <RightNavigation />
        </div>
    )
}