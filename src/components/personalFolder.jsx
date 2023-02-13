import React from "react";

export default function personalFolder(){
    return (
        <div className=" flex flex-col gap-4 h-full items-center justify-center">
            <div className="w-[338px] pb-20">
                <h2 className=" font-semibold text-lg text-center text-[#101828]">Hello Salman</h2>
                <p className="text-[#667085] text-center text-sm">
                This is your personal folder where you can create
                Snippets for your own use
                </p>

                <p className="text-[#667085] text-center text-sm">
                You cannot share this folder with other members. 
                To share Snippets create a new folder and add them to it
                </p>
            </div>
        </div>
    )
}