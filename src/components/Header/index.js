import {BsFillEyeFill} from 'react-icons/bs'
import {MdArrowDropDown} from 'react-icons/md'
import {IoIosStar} from 'react-icons/io'
import {BiGitRepoForked} from 'react-icons/bi'
import './header.css'

const Header = () => {
    return ( 
        <div className="header">
            <div className='header-sub-container'>
                <h1 className="header-title">facebook / issues</h1>
                <div className='header-labels'>
                    <div className='label-box'>
                        <BsFillEyeFill />
                        <p className='header-label'>Watch</p>
                        <MdArrowDropDown />
                    </div>
                    <div className='label-box'>
                        <IoIosStar />
                        <p className='header-label'>Star</p>
                        <MdArrowDropDown />
                    </div>
                    <div className='label-box'>
                        <BiGitRepoForked />
                        <p className='header-label'>Fork</p>
                        <MdArrowDropDown />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;