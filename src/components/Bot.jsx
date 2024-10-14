import { IoSend } from "react-icons/io5";
import Reply from "./Reply";
import Query from "./Query";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export default function Bot({setSidebarToggle, conversation, setConversation, conversationID, setRefresh}){

    // Query state
    const [query, setQuery] = useState("")

    // Loading state
    const [isLoading, setIsLoading] = useState(false)

    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        setTimeout(() => {            
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }, 100);
    }
    
    // Function to get response
    function handleQuery(e){
        e.preventDefault()

        let temp = conversation

        // Prevent going forward if a question is already asked
        if(temp[temp.length-1][0] === "user"){
            return
        }

        setIsLoading(true)

        temp.push(["user", query])
        setConversation(temp)

        // Start generating answer
        axios.post("https://gradientgpt.vercel.app/api/chat/query", 
            {
                userId: "670c129fa9f85c891e52b1fc",
                query: query
            }
        )
        .then((res)=>{
            console.log(res.data)

            setQuery("")
            temp.push(["bot",res.data.result_text])
            setConversation(temp)

            document.getElementById('queryBox').style.height = '1rem'           
            setIsLoading(false)
            if(window.innerWidth > 768){
                scrollToBottom()
            }

            // Register the answer to the saved conversations
            axios.post("https://gradientgpt.vercel.app/api/savedConversations/save",
                {
                    conversationId: conversationID,  
                    userId: "670c129fa9f85c891e52b1fc",  
                    chatHistory: [
                      {
                        userQuery: query,
                        apiResponse: res.data
                      }
                    ]
                }
            )
            .then((res)=>{
                console.log(res.data)
                setRefresh(prev=>prev+1)             
            })
            .catch((err)=>{
                console.log(err)                
            })


        })
        .catch((err)=>{
            console.log(err)

            temp.push(["bot","There seems to be an error. Could you try again?"])
            setConversation(temp)

            setIsLoading(false)
            if(window.innerWidth > 768){
                scrollToBottom()
            }
        })
        
        
    }

    return(
        <div className=" w-full md:w-[90%] h-full md:h-auto md:max-h-[90%]  bg-white rounded-md shadow-xl flex flex-col duration-300 ease-out">
            
            {/* Heading section */}
            <div className="flex flex-col px-8 md:px-14 py-[1rem] gap-0 w-[100%] ">
                <div className=" text-lg md:text-xl font-semibold">GradientGPT</div>
                <div className="text-xs text-gray-500">Online</div>
            </div>

            {/* Conversation section */}
            <div className="h-[75%] md:h-[27rem] w-[100%] bg-[#DEE9EC] overflow-auto text-xs px-8 md:px-14 py-3 pb-10 md:pb-3 flex flex-col gap-3 duration-300 ease-out">
                {
                    conversation.map((item, idx)=>{
                        return(
                            <div key={idx}>
                                {
                                    item[0] === "bot"
                                    ?
                                    <Reply text={item[1]}/>
                                    :
                                    <Query text={item[1]}/>
                                }
                            </div>
                        )
                    })
                }
                <div ref={messagesEndRef}></div>
            </div>
            
            {/* Query input section */}
            <form className="min-h-[4rem] px-8 md:px-14 py-6 md:py-4 focus:border flex gap-3 justify-center items-center relative">

                {/* Mobile option menu */}
                <div 
                    onClick={(e)=>{
                        e.preventDefault()
                        setSidebarToggle(true)
                    }}
                    className="absolute left-3 -top-12 w-[2.5rem] h-[2.5rem] rounded-full bg-white flex md:hidden justify-center items-center shadow-md hover:scale-105 active:scale-95 duration-150 cursor-pointer">
                    <img src="/suitcase.svg" className=""/>
                </div>
                
                {/* Textarea */}
                <textarea
                    id="queryBox"
                    value={query}
                    onKeyDown={(e)=>{
                        if(e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleQuery(e)
                            scrollToBottom(e)
                        }
                    }}
                    onChange={(e)=>{
                        setQuery(e.target.value)
                        e.target.style.height = 'auto'
                        e.target.style.height = `${e.target.scrollHeight}px`
                    }}
                    rows={1} 
                    className="max-h-[10rem] outline-none resize-none text-gray-500 text-xs w-full" 
                    placeholder="Enter query..."
                />

                {/* Submit Button */}
                <button 
                    onClick={(e)=>{

                        handleQuery(e);
                        if(window.innerWidth > 768){
                            scrollToBottom()
                        }
                        
                    }} 
                    className={`text-gray-500 ${isLoading?" " : ' hover:text-primary '} duration-300 ease-in-out ${isLoading?" animate-spin ":" "}`}>
                        {
                            isLoading
                            ?
                                <AiOutlineLoading3Quarters />
                            :
                                <IoSend size={18}/>
                        }
                </button>
            
            </form>
        </div>
    )
}
