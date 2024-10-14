import axios from "axios"
import { useEffect, useState } from "react"
import AdminTab from "./components/AdminTab"

export default function Admin(){
    
    const [users, setUsers] = useState(null)
    const [savedChats, setSavedChats] = useState([])

    useEffect(() => {
        
        axios.get("https://gradientgpt.vercel.app/api/admin/users")
        .then((res)=>{

            console.log(res.data)            

            setUsers(res.data.users)
            setSavedChats(res.data.userSavedChats)
        })
        .catch((err)=>{
            console.log(err);
            
        })
    
    
        return () => {}
    }, [])
    

    return(
        <div className="bg-gray-100 h-[100vh] px-10 md:px-28 py-16 text-[#383838] flex flex-col gap-16">
            
            {/* Heading */}
            <div className="text-xl md:text-3xl font-bold">
                Admin View
            </div>

            {/* Tabs */}
            {
                users === null
                ?
                    "Loading..."
                :

                users === false
                ?
                    "Error"
                :
                    <div className="flex flex-col md:flex-row flex-wrap w-full gap-4">
                        {
                            users.map((user, idx)=>{
                                return(
                                    <AdminTab savedChats={savedChats} key={idx} user={user}/>
                                )
                            })
                        }
                    </div>
            }



        </div>
    )
}