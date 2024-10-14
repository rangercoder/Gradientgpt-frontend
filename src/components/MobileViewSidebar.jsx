import { CgClose } from "react-icons/cg";
import { CiChat1 } from "react-icons/ci";

export default function MobileViewSidebar({sidebarToggle, setSidebarToggle, createNewConversation, allConversations, loadExistingConversation, setConversation, conversationID}){
    return(
        // Main div
        <div className={`fixed w-full h-full bg-primary z-10 duration-500 ease-in-out ${!sidebarToggle&&'-translate-x-[50rem]'} flex flex-col gap-8 py-8 text-white`}>

            {/* Heading */}
            <div className="flex justify-between text-2xl px-8">
                <div className="font-semibold">
                    Saved Conversations
                </div>

                <CgClose onClick={()=>{setSidebarToggle(false)}} className="cursor-pointer duration-150 hover:rotate-90"/>
            </div>

            {/* Create New Conversations */}
            <div className="px-8">
                <input className=" w-full rounded p-[7px] text-sm bg-primary duration-300 ease-in-out hover:bg-onFocus border-white border hover:cursor-pointer" type="submit" value={"Create New Chat"} onClick={()=>{createNewConversation()}}/>
            </div>

            {/* List of Conversations */}
            <div className="px-8 flex flex-col gap-2">
                
                {   
                    allConversations === null
                    ?
                        "Loading..."
                    :

                    allConversations === false
                    ?
                        "Error"
                    :
                    
                    allConversations.map((conversation)=>{
                        return(
                            <div onClick={()=>{setConversation([['bot', "Loading..."]]); setSidebarToggle(false); loadExistingConversation(conversation.history, conversation.id)}} key={conversation.id} className={`flex gap-2 items-center hover:bg-onFocus px-2 select-none cursor-pointer rounded-md ${conversationID===conversation.id ? " outline outline-1 " : " "}`}>
                                <CiChat1 size={30} className="mt-[2px]"/> {conversation.history[0].userQuery}
                            </div>
                        )
                    })
                }

            </div>

            {/* Seperator */}
            {/* <div className="h-[1px] w-full bg-[#FFFFFF] "/> */}
            
        </div>
    )
}