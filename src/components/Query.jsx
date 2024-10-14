import { FaUserCircle } from "react-icons/fa";


export default function Query({text}){
    return(

        // Query Chatbox
        <div className="flex flex-col gap-1 items-end ">
            <div className="w-[2rem]"><FaUserCircle size={30} color="#717480"/></div>
            <div className="rounded-md rounded-tr-none min-w-[30%] max-w-[100%] p-3 bg-[#717480] text-white shadow-md break-words hover:scale-[1.01] duration-300 ease-in-out">{text}</div>
        </div>
    )
}