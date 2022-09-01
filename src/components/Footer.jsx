import { FaTwitter, FaGithub, FaAngellist, FaHome} from 'react-icons/fa';


export default function Footer () {
    return (
        <div className="footer">
            <FaTwitter className='footer-icons'/>
            <FaGithub className='footer-icons' /> 
            <FaAngellist className='footer-icons' />
            <FaHome className='footer-icons' />
        </div>
    )
}