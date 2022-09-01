import profilePic from "../assets/saidatalli.png"
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";


export default function Header () {
    return (
        <div className="header">
            <img src={profilePic} alt="saidat alli picture" />
            <h2 className="header-title">Saidat Alli</h2>
            <h5 className="header-subtitle">Full Stack Engineer</h5>
            <span><a href="https://saidatalli.netlify.app/" className="header-link">visit my website</a></span>
            <div className="header-btn-container">
                <button className="header-button"><a href="#"><FiMail className='header-icons'/>Email</a></button>
                <button className="header-button"><a href="#"><FaLinkedin className='header-icons'/>LinkedIn</a></button>
            </div>

        </div>
    )
}