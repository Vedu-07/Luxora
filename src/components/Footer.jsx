import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "@remixicon/react"

const Footer = () => {
    return(
        <footer className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
                <div className="flex space-x-6 mb-2 justify-between w-full">
                    <div className="flex gap-5">
                    <a href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Out Facebook Page">
                        <RiFacebookFill/>
                    </a>
                    <a href="https://www.x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Out X Page">
                        <RiTwitterFill/>
                    </a>
                    <a href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Out Instagram Page">
                        <RiInstagramFill/>
                    </a>
                    </div>
                    <div className="flex">
                    <p className="text-sm">Made with ❤️ By Vedant Swami</p>
                    </div>
                    
                </div>
            </div>

        </footer>
    )
}

export default Footer