import React from "react"
import RightNavigation from './RightNavigation'
import FolderName from './FolderName'
import PersonalFolder from './PersonalFolder'


export default function mainPage({folderValue, name}){
    return(
        <div className="absolute flex flex-row right-0 left-[304px] ">
            <div className="flex flex-col w-4/5">
                <FolderName Foldername={folderValue} />
                <PersonalFolder Folderaname={folderValue} name={name} />
            </div>
            <RightNavigation name={name}/>
        </div>
    )
}
//folder name => folder_name, add_shortcut
//main page foldername.jsx should change
//rightNavigation add an extra user
//to folder name pass in props with 