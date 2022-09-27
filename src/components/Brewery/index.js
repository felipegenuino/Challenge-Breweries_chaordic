import { Link } from 'react-router-dom';
import styles from './index.module.css'; 

 
export default function Brewery({props}){
    // console.log("props: ", props)
   const type = 'tag_' + props.brewery_type;
    return (
        <li className={styles.listitem} id={props.id}> 
            <section className={styles.card}>
                <div className={styles.card__content} >
                    <h3 className={styles.card__title}> {props.name} </h3>
                    <p className={styles.card__info}> <span> {props.street} </span> <br /> {props.city} {props.state} - {props.phone}  <br /> {props.country}</p> 
                    <Link to={`./detail/${props.id}`} className={styles.card__stretchedLink} aria-label="ir para  Avondale Brewing Co"></Link>
                </div>
                <footer className={styles.card__footer}>

                    <span className={` ${styles.tag} ${type}  ` } > 
                        {props.brewery_type.charAt(0).toUpperCase() + props.brewery_type.slice(1)} 
                    </span>

                </footer>
            </section>
        </li>
    )
}