import { useEffect, useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function Reply({text}){
    
    const [loadText, setloadText] = useState("")
    
    // Function for typing animation
    async function stepType() {
        let i = 0;
        const stringResponse = String(text)
        let intervalId=0;
        const handleAnimationSpeed = (delay,increment) => {
            if(intervalId!=0) clearInterval(intervalId);
            intervalId=setInterval(() => {
                setloadText(stringResponse.slice(0, i));                    
                i+=increment;
                if (i > stringResponse.length) {
                    clearInterval(intervalId);
                }
            }, delay);
        }
        handleAnimationSpeed(5,1);
        const handleVisibilityChange = () => {
            if(document.hidden){
                handleAnimationSpeed(1,190)
            }
            else{
                handleAnimationSpeed(5,1)
            }
            };
            document.addEventListener('visibilitychange', handleVisibilityChange)
        return () => {
            clearInterval(intervalId);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        }
    }
    
    useEffect(() => {        
        stepType();
    }, [])
    
    
    return(

        // Reply Chatbox
        <div className="flex flex-col gap-1 items-start">
            <div className="w-[2rem]"><FaRobot size={30} color="#03556A"/></div>
            <div className="rounded-md rounded-tl-none min-w-[30%] max-w-[100%] p-3 bg-white shadow-md break-words hover:scale-[1.01] duration-300 ease-in-out">{loadText}</div>
        </div>
    )

}
