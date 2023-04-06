import styles from "./Searchbar.module.css";

export default function Searchbar(){
    return(
        <form method="get">
            <div className={styles.floatingLabel}>
                <input type="search" id="fem-search" name="fem-search" className={styles.formControl} placeholder="blabla"/>
                <label htmlFor="fem-search">Search a challenge :</label>
            </div>
            <input type="submit" value="Search" className={styles.formBtn}/>
        </form>
    )
}