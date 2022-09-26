//https://api.openbrewerydb.org/breweries?per_page=3

import { useState, useEffect } from "react";
import Brewery from "../../components/Brewery"

 
export default function Breweries(props){
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch("https://api.openbrewerydb.org/breweries")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
    
    //console.log(data)

 
    const [filterParam, setFilterParam] = useState(["All"]);
    const menuItems = [...new Set(data?.map((item) => item.brewery_type))];
 
    return (
<>

{/* {menuItems} */}
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
    
    : <h5> Loading Breweries </h5>}
           

            <nav className="pagination"> 
                <ul className="pagination__list">
                    <li className="pagination__item" href="#">
                        <a href="./page-1" className="pagination__link active" aria-current="page"> 1 </a>
                    </li>
                    <li className="pagination__item" href="#">
                        <a href="./page-2" className="pagination__link"> 2 </a>
                    </li>
                    <li className="pagination__item" href="#">
                        <a href="./page-3" className="pagination__link"> 3 </a>
                    </li>
                </ul>
            </nav>
        </section> 

        </>
    )
}