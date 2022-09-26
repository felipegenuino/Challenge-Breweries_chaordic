import {useState} from 'react'

export default function Filter(props){
    function filtraComBreweries(){
        console.log('olá Breweries')
    }
    const [filterParam, setFilterParam] = useState(["All"]);

    console.log(filterParam)
    return (
            <section
            onChange={(e) => {
                setFilterParam(e.target.value);
                filtraComBreweries();
            }}
            className="filter">
               <strong>  Filter:  </strong>
                <select>
                    <option> All </option>
                    <option> Micro </option>
                    <option> Large </option>
                </select>
            </section>
        )
}