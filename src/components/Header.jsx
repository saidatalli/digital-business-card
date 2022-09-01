import profilePic from "../assets/saidatalli.png"
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";


export default function Header () {
    return (
        <div className="header">
            <img src={profilePic} alt="saidat alli picture" />
            <h3>Saidat Alli</h3>
            <h5>Full Stack Engineer</h5>
            <span><a href="https://saidatalli.netlify.app/">visit my website</a></span>
            <div className="header-buttons">
                <button><a href="#"><FiMail className='header-icons'/>Email</a></button>
                <button><a href="#"><FaLinkedin className='header-icons'/>LinkedIn</a></button>
            </div>

        </div>
    )
}