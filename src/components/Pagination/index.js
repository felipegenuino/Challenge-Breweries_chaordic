import styles from './index.module.css'; 


export default function Pagination(props){
    const { currentPage, maxPageLimit, minPageLimit} = props;
     const totalPages = props.response;
 
  
console.log('pagination props', props.response)

    return (
        <nav className={styles.pagination}>   
                <ul className={styles.pagination__list}>
                    <li className={styles.pagination__item}>
                        <button className={`${styles.pagination__button} ${styles.pagination__active} `}  aria-current="page" > 1 </button>
                    </li>
                    <li className={styles.pagination__item} >
                        <button className={styles.pagination__button}> 2 </button>
                    </li>
                    <li className={styles.pagination__item} >
                        <button className={styles.pagination__button} > 3 </button>
                    </li>
                </ul>
            </nav>
    )
}