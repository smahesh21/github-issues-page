import './pagination.css'

const Pagination = (props) => {
    const {totalIssues,paginate,currentPage,issuesPerPage} = props
    const pageNumbers = []

    for (let i=1; i<=Math.ceil(totalIssues/issuesPerPage);i++) {
        pageNumbers.push(i)
    }

    console.log(currentPage)

    return (
        <div className='pagination-container'>
            <ul className="pagination">
            {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                    <a onClick={() => paginate(number)} className={currentPage === number ? "active-page-link" : "page-link"}>{number}</a>
                </li>
            ))}
        </ul>
        </div>
    )
}
 
export default Pagination;