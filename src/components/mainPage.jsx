import React from "react"
import RightNavigation from './RightNavigation'
import FolderName from './FolderName'
import PersonalFolder from './PersonalFolder'

import IntroRightNavigation from "./IntroRightNavigation"

export default function MainPage({folderValue, user}){
    return(
        <div className="absolute flex flex-row right-0 top-12 left-[304px] ">
            <div className="flex flex-col w-4/5">
                <FolderName user={user} Foldername={folderValue} />
                <PersonalFolder user={user} FolderValue={folderValue} />
            </div>
            {
                (user === 'intro') 
                ?
                <IntroRightNavigation name={user}/>
                :
                <RightNavigation name={user}/>
            }
        </div>
    )
}


//folder name => folder_name, add_shortcut
//main page foldername.jsx should change
//rightNavigation add an extra user
//to folder name pass in props with 