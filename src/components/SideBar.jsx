import { CiChat1 } from "react-icons/ci"

export default function SideBar({setusecase, setConversation, createNewConversation, allConversations, loadExistingConversation, conversationID}){

    return(
        // bg-gradient-to-b to-[#021B5A] via-blue-900 from-primary
        <div className={`fixed w-[18rem] h-full bg-primary z-10 duration-500 ease-in-out hidden md:flex flex-col gap-8 py-8 text-white`}>

             {/* Heading */}
             <div className="flex justify-between text-xl px-6">
                <div className="font-semibold">
                    Saved Conversations
                </div>
            </div>

            {/* Create New Conversations */}
            <div className="px-6">
                <input className=" w-full rounded p-[7px] text-sm bg-primary duration-300 ease-in-out hover:bg-onFocus border-white border hover:cursor-pointer" type="submit" value={"Create New Chat"} onClick={()=>{createNewConversation()}}/>
            </div>

            {/* List of Conversations */}
            <div className="px-6 flex flex-col h-[70%] pb-4 gap-2 text-sm overflow-auto pt-2">

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
                            <div onClick={()=>{setConversation([['bot', "Loading..."]]); loadExistingConversation(conversation.history, conversation.id)}} key={conversation.id} className={`flex gap-2 items-center hover:bg-onFocus px-2 select-none cursor-pointer rounded-md  ${conversationID===conversation.id ? " outline outline-1 " : " "}`}>
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