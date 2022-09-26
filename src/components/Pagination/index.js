export default function Pagination(props){
    const { currentPage, maxPageLimit, minPageLimit} = props;
     const totalPages = props.response;
 
  


console.log('pagination props', props.response)

    return (
        <nav className="pagination">   
                <ul className="pagination__list">
                    <li className="pagination__item" href="#">
                        <button className="pagination__link active" aria-current="page" > 1 </button>
                    </li>
                    <li className="pagination__item" href="#">
                        <a href="./page-2" className="pagination__link"> 2 </a>
                    </li>
                    <li className="pagination__item" href="#">
                        <a href="./page-3" className="pagination__link"> 3 </a>
                    </li>
                </ul>
            </nav>
    )
}