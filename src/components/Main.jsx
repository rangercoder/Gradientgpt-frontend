import Bot from "./Bot";
import { useState } from "react";

export default function Main({conversation, setConversation, setSidebarToggle, conversationID, setRefresh}){

    return(

        // Toggle for Chatbot and Register Screen
        <div className=" md:ml-[18rem] w-full md:w-[85vw] h-[92vh] flex justify-center items-center overflow-hidden">
            <Bot setRefresh={setRefresh} conversationID={conversationID} setSidebarToggle={setSidebarToggle} conversation={conversation} setConversation={setConversation}/>                
        </div>
    )
}