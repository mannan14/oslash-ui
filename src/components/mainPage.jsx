import React from "react"
import RightNavigation from './RightNavigation'
import FolderName from './FolderName'
import PersonalFolder from './PersonalFolder'
import SnippetsFolder from "./SnippetsFolder";

import IntroRightNavigation from "./IntroRightNavigation"

export default function MainPage({folderValue, user}){
    return(
        
        <>
            <div className="flex flex-1 flex-col">
                <FolderName user={user} Foldername={folderValue} />
                <PersonalFolder user={user} FolderValue={folderValue} />
                <SnippetsFolder/>
            </div>
            {
                (user === 'intro') 
                ?
                <IntroRightNavigation name={user}/>
                :
                <RightNavigation name={user}/>
            }
        </>
    )
}


//folder name => folder_name, add_shortcut
//main page foldername.jsx should change
//rightNavigation add an extra user
//to folder name pass in props with 