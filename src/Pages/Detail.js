import { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom';

import Header from '../components/Header'
import Loading from '../components/Loading'

export default function Detail(){
    const [data, setData] = useState(null);
    const {breweryId} = useParams();

    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/breweries/${breweryId}`)
        .then((response) => response.json())
        .then((data) => setData(data)); 
    }, [breweryId]);

    // console.log(data)
    
/* 
    Regular Expression to reformat a US phone number in Javascript    
    https://stackoverflow.com/a/8358141/4313203
*/
function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }


 
    return (
        <>
          <Header />
          <main>
          <section className="goto_back">
            <Link to="/"  className="goto_back__link"> <span className="goto_back__text"  title="Back to Breweries list"> Back </span> </Link>
        </section>
        {data ?  
          <article className="single__content">
             <section className={`single__card`}> 
              <div  className={`single__card__top single__card__tag--${data?.brewery_type}`}></div>
                <div className="single__card__content">
                    <h3 className="single__card__title"> {data?.name} </h3>
                    <ul  className="single__card__list" aria-label="More details"> 
                        <li>  <strong> Type: </strong>  {data?.brewery_type ? data.brewery_type.charAt(0).toUpperCase() + data.brewery_type.slice(1) : 'Não cadastrado'} </li>
                        <li>  <strong> Street: </strong>  {data?.street ? data.street : 'Não cadastrado'} </li>
                        <li>  <strong> City: </strong>   {data?.city ? data.city : 'Não cadastrado'} </li>
                        <li>  <strong> State: </strong>   {data?.state ? data.state : 'Não cadastrado'} </li>
                        <li>  <strong> Postal code: </strong>   {data?.postal_code ? data.postal_code : 'Não cadastrado'} </li>
                        <li>  <strong> Country: </strong>   {data?.country ? data.country : 'Não cadastrado'} </li>
                        <li>  <strong> Website: </strong>   {data?.website_url ? <a href={data.website_url} target="_blank" rel="noreferrer" > {data.website_url} (opens in new window) </a> : 'Não cadastrado'} </li>
                        <li>  <strong> Phone: </strong>   {data?.phone ? formatPhoneNumber(data.phone) : 'Não cadastrado'} </li>
                        {/* About maps: https://moz.com/blog/everything-you-never-wanted-to-know-about-google-maps-parameters */}
                        <li>  <strong> Open in maps: </strong>   {data?.latitude && data?.longitude  ? <a href={`http://maps.google.com/maps?&z=15&mrt=yp&t=p&q=${data.latitude}+${data.longitude}`} target="_blank" rel="noreferrer" > {data.latitude} {data.longitude} (opens in new window) </a> : 'Não cadastrado'} </li>
                   </ul> 
                 </div>  
            </section>
             </article>
              : <Loading label="Loading" info="Brewery Detail" />}
            </main>
     </>
    )
}