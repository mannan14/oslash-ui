
export const userInfo = {
    username:'Salman',
}

export const snippet =
[
    {
        folders:`${userInfo.username.toLowerCase()}`, 
        foldername:`${userInfo.username}'s Folder`, 
        subfolder:[]
    },
    {
        folders:'invitations', 
        foldername:'invitations', 
        subfolder:[
            {folders:'intro', foldername:'o/intro'}
        ]
    },
    {
        folders:'personal', 
        foldername:'personal', 
        subfolder:[]
    },
    {
        folders:'pro', 
        foldername:'o/pro', 
        subfolder:[]
    },
]

//For Main Page => user = folders, folderValue = foldername