import { useEffect, useState } from 'react';
import './style.css'
import {MdArrowDropDown} from 'react-icons/md'
import { formatTheIssue } from '../../objectsformatter/formatter';
import Issue from '../Issue';
import Pagination from '../Pagination';

const Issues = () => {
    const [issues,setIssues] = useState([])

    const [currentPage,setCurrentPage] = useState(1)
    const [issuesPerPage] = useState(10)

    const indexOfLastIssue = currentPage * issuesPerPage
    const indexOfFirstIssue = indexOfLastIssue - issuesPerPage
    const currentIssues = issues.slice(indexOfFirstIssue,indexOfLastIssue)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(()=>{
        const getTheIssues = async () => {
            const response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues?page=1&per_page=1000")
            if (response.ok) {
                const data = await response.json()
                const formattedIssues = data.map((issue) => formatTheIssue(issue))
                console.log(formattedIssues)
                setIssues(formattedIssues)
            }
        }
        getTheIssues()
    },[])
    
    return ( 
        <div className="issues-main-container">
            <div className='issues-sub-container'>
                <div className='open-closed-labels'>
                    <div className='open-closed'>
                        <p className='open'>Open</p>
                        <p className='closed'>closed</p>
                    </div>
                    <div className='labels-container'>
                        <p className='label'>Auther <MdArrowDropDown className='icon' /></p>
                        <p className='label'>Label <MdArrowDropDown  className='icon'/></p>
                        <p className='label'>Projects <MdArrowDropDown className='icon'/></p>
                        <p className='label'>Milestones <MdArrowDropDown className='icon'/></p>
                        <p className='label'>Assignee <MdArrowDropDown className='icon'/></p>
                        <p className='label'>Sort <MdArrowDropDown className='icon'/></p>
                    </div>
                </div>
                {
                    currentIssues.map((issue) => <Issue key={issue.number} issueDetails={issue} />)
                }
            </div>
            <Pagination
                issuesPerPage = {issuesPerPage}
                totalIssues = {issues.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
     );
}
 
export default Issues;