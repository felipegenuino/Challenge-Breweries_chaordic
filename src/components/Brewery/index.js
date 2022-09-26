import { Link } from 'react-router-dom';

export default function Brewery({props}){
    console.log("props: ", props)

    return (
        <li className="Breweries__listitem" id={props.id}> 
            <section className="Brewery-card">
                <div className="Brewery-card__content">
                    <h3 className="Brewery-card__title"> {props.id} </h3>
                    <p  className="Brewery-card__info"> <span> {props.street} </span> <br /> {props.city} {props.state} - {props.phone}  <br /> {props.country}</p> 
                    <Link to={`./detail/${props.id}`} className="Brewery-card__stretched-link" aria-label="ir para  Avondale Brewing Co"></Link>
                </div>
                <footer className="Brewery-card__footer">
                    <span className="Brewery-card__tag ${props.brewery_type}"> {props.brewery_type} </span>
                </footer>
            </section>
        </li>
    )
}