import { useState } from "react";
import { BsChevronBarDown } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";

export default function AdminTab({user, savedChats}){
    
    const [isOpen, setisOpen] = useState(false)
    
    return(
        <div className="w-full md:w-1/4">
            <div onClick={()=>{setisOpen(!isOpen)}} className=" bg-white h-[2rem] flex items-center justify-between px-4 py-2 rounded-md text-[#717480] shadow cursor-pointer select-none">
                <div>{user.username}</div>

                <BsChevronBarDown className={`${isOpen?"rotate-180":"rotate-0"} duration-200`}/>

                
            </div>
            
            {
                savedChats.filter((chat)=> user.username === chat.userId.username).length > 0&&

                <div className={`${isOpen? "px-4 py-2 h-[10rem]" : "h-0"} bg-[#E9E9E9] rounded-b-lg overflow-clip duration-200 text-sm flex flex-col gap-1 overflow-y-auto`}>
                {
                    savedChats.map((chat, idx)=>{

                        if(user.username === chat.userId.username){
                            return(
                                <div className="flex gap-1 items-center" key={idx}>
                                    <CiChat1 className="mt-[2px]" size={18}/>
                                    <span className="w-[85%] text-ellipsis text-nowrap overflow-hidden">{chat.chatHistory[0].userQuery}</span>
                                </div>
                            )
                        }
                    })
                }
                </div>
            }
            
        </div>
    )
}