//https://api.openbrewerydb.org/breweries?per_page=3

import { useState, useEffect } from "react";
import Brewery from "../../components/Brewery"
import Pagination from "../../components/Pagination"

 
export default function Breweries(props){
    const [data, setData] = useState(null);
    const [filterParam, setFilterParam] = useState(["All"]);
    
    const menuItems = [...new Set(data?.map((item) => item.brewery_type))];

    // a new state variable called "currentPage"  
    const [currentPage, setCurrentPage] = useState(1);

    // define quantidade de posts por página.
    const breweryPerPage = 12;


    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);


    
    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/breweries?page=${currentPage}&per_page=${breweryPerPage}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }, [currentPage]);
    
    //console.log(data)


    const paginationAttributes = {
        currentPage,
        maxPageLimit,
        minPageLimit,
        response: data,
      };

      
    return (
<>

 {filterParam}
        <section onChange={(e) => {
                setFilterParam(e.target.value);
                
              }}
            className="filter">
               <strong>  Filter:  </strong>
                <select>
                <option> All </option>
                    {
                        menuItems.map((item)=>(
                            <option key={item} value={item}> {item} </option>
                        ))
                    }
                     
                </select>
            </section>

        <section className="Breweries"> 



{ data !== null ? 
    <ul className="Breweries__list">
        {data.map((brewery) => (
            <Brewery 
                key={brewery.id} 
                props={brewery}
                />
        ))}  
    </ul>
    
    : <h5> Loading Breweries list</h5>} 


 
            <Pagination
            {...paginationAttributes} 
            // onPrevClick={onPrevClick} 
            // onNextClick={onNextClick}
            // onPageChange={onPageChange}
            />
        </section> 

        </>
    )
}