import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { useState } from "react";
import {LINKS} from  "../constants/index"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="border-b-2">
             <div className="max-w-7xl mx-auto flex justify-between items-center py-8" >
                
                <div className="pl-2">
                    <a href="" className="font-semibold text-2xl" >L U X O R A</a>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl pr-2 focus:outline-none  cursor-pointer" aria-label={isOpen ? "Close Menu" : "Open Menu"}>
                        {isOpen ? <RiCloseLine/> : <RiMenu3Line/>}
                    </button>
                </div>

                <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
                    {LINKS.map((link,index) => (
                        <a key={index} href={link.link} className="uppercase text-sm font-medium">{link.name}</a>
                    ))}

                </div>

                <div className={`${isOpen ? "block" : "hidden" } md:hidden fixed top-20 left-0 z-50 bg-neutral-50 w-full py-5 px-4 mt-2 border-b-2`}>
                    {LINKS.map((link,index) => (
                        <a key={index} href={link.link} className="uppercase text-lg font-medium block py-2 tracking-wide" onClick={() => setIsOpen(false)}>{link.name}</a>
                    ))}
                </div>
             </div>
        </nav>
    )
}

export default Navbar
