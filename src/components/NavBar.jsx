import { FaUserCircle } from "react-icons/fa";

export default function NavBar(){
    return(
        <div className="h-[4rem] w-[100%] bg-primary flex items-center sticky top-0 left-0 z-10 border-b">
            
            <div className=" w-[95%] flex">
                {/* <img src="/kpkp.svg"/> */}
                <img src="/logowhite.svg" onClick={() => window.location.assign('/')}width={150} height={80} className="ml-12 cursor-pointer"/>
                
                <div className=" w-[4rem] flex justify-around items-center ml-auto">
                    <div className="flex text-white">
                        
                        {/* English */}
                    </div>
                    <div>
                    <FaUserCircle className = "cursor-pointer" onClick={() => window.location.assign('/admin')} color="white" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

