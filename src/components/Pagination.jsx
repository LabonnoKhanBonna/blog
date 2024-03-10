// import {Link} from "react-router-dom";
// import '/home/labonno/projects/blog/src/assets/styles/pagination.css';
// function Pagination(){
//     return(
//         <div className="pg">
//             <nav aria-label="Page navigation example">
//                 <ul className="pagination">
//                     <li className="page-item"><Link to="/practice" className="page-link" href="#">Previous</Link></li>
//                     <li className="page-item"><Link to ="/ "className="page-link" href="#">1</Link></li>
//                     <li className="page-item"><Link to="/about" className="page-link" href="#">2</Link></li>
//                     <li className="page-item"><Link to="/practice" className="page-link" href="#">3</Link></li>
//                     <li className="page-item"><Link to ="/" className="page-link" href="#">Next</Link></li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }
//
// export default Pagination;


import {Link} from "react-router-dom";
import {useState} from "react";
import '/home/labonno/projects/blog/src/assets/styles/pagination.css';
function Pagination( ){
    const [currentPage, setCurrentPage] = useState(1);
    const pageLinks = ["/about" , "/contract" , "/practice"];

    const previousPage = ()=>{
        if (currentPage >1){
            setCurrentPage(currentPage-1)
        }
    };

    const nextPage = ()=>{
        if (currentPage < pageLinks.length){
            setCurrentPage(currentPage+1)
        }
    };
    return(
        <div className="pageArrange">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><button className="btn btn-outline-primary" onClick={previousPage}>Previous</button></li>
                    {pageLinks.map((link, index) => (
                        <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <Link to={link} className="page-link">{index + 1}</Link>
                        </li>
                    ))}

                    <li className="page-item"><button className="btn btn-outline-primary" onClick={nextPage}>Next</button></li>
                </ul>
            </nav>
        </div>
    )
}
export default Pagination;
