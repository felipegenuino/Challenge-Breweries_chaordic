import styles from './index.module.css'; 

export default function Loading(props){
    return (
        <div className={styles.loading} role="alert"> 
            <div className={styles.loading__content}> 
                <div className={styles.loading__container} aria-hidden="true"> 
                    <span className={styles.loading__icon}> </span>
                </div>
                <strong> {props.label ? props.label : "Loading"} </strong>
                <span> {props.info} </span>
            </div> 
        </div>
    )
}



