import axios from "axios";
import Main from "./components/Main";
import MobileViewSidebar from "./components/MobileViewSidebar";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";

export default function App() {

  // Conversation states
  const [conversation, setConversation] = useState([["bot","Hello! I'm your Bot!"]])
  const [conversationID, setConversationID] = useState(String((new Date()).getTime()))
  const [allConversations, setAllConversations] = useState(null)
  const [refresh, setRefresh] = useState(1)

  // Sidebar toggle and isMobile screen toggle
  const [sidebarToggle, setSidebarToggle] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth>768?false:true)

  // Handle resize
  useEffect(() => {
    window.onresize = function(e){
      if(window.innerWidth > 768){
        setIsMobile(false)
      }
      else{
        setIsMobile(true)
      }
    }
  
    return () => {}
  }, [])

  // Retrieve all conversations
  useEffect(() => {

    setAllConversations(null)

    axios.get("https://gradientgpt.vercel.app/api/savedConversations/670c129fa9f85c891e52b1fc")
    .then((res)=>{
      console.log(res.data, 'all conversations')
      let temp = []

      for(let item of res.data){
        temp.push({history:item.chatHistory, id:item.conversationId})
      }
      setAllConversations(temp)
    })
    .catch((err)=>{
      console.log(err)
      setAllConversations(false)
    })
  
    return () => {}
  }, [refresh])
  

  // Function to create a new conversation
  function createNewConversation(){
    setConversationID(String((new Date()).getTime()))
    setConversation([["bot","Hello! I'm your Bot!"]])
  }

  // Function to load and display a saved conversation
  function loadExistingConversation(history, id){
    console.log(history)

    setTimeout(() => {
      let temp = []
      for(let qa of history){
        temp.push(['user', qa.userQuery])
        temp.push(['bot', qa.apiResponse.result_text])
      }
  
      setConversation(temp)
      setConversationID(id)
      
    }, 1);
  }
  

  return (
    <>
      {/* Sidebar for options */}
      <SideBar conversationID={conversationID} loadExistingConversation={loadExistingConversation} allConversations={allConversations} createNewConversation={createNewConversation} setConversation={setConversation} />

      {/* Mobile View Sidebar */}
      {
        isMobile&&
        <MobileViewSidebar conversationID={conversationID} setConversation={setConversation} loadExistingConversation={loadExistingConversation} allConversations={allConversations} createNewConversation={createNewConversation} setSidebarToggle={setSidebarToggle} sidebarToggle={sidebarToggle}/>
      }
      
      {/* Main div */}
      <div className="bg-gray-100 flex justify-start items-center">
        <Main setRefresh={setRefresh} conversationID={conversationID} setSidebarToggle={setSidebarToggle} conversation={conversation} setConversation={setConversation}/>
      </div>
    </>
  );
}
