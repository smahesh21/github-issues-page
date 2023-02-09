import './issue.css'

const Issue = (props) => {
    const {issueDetails} = props

    const issueUpdatedDate = issueDetails.updatedAt.substring(0,10)
    const issueUpdatedTime = issueDetails.updatedAt.substring(11,19)
    
    return ( 
        <div className="issue-container">
            <span className='span-element'>!</span>
            <div className='title-description'>
                <h1 className='issue-title'>{issueDetails.issueTitle}</h1>
                <p className='issue-description'>#{issueDetails.number} opened at {issueUpdatedDate} {issueUpdatedTime} by <span className='user'>{issueDetails.user}</span></p>
            </div>
        </div>
     );
}
 
export default Issue;