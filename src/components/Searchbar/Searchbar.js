import React from "react"
import styles from "./Searchbar.module.css";

export default function Searchbar({filterWord, setFilterWord}){
    const handleChange = e => {
        setFilterWord(e.target.value)
        // console.log(e.target.value)
    }
    const submit = e => {
        e.preventDefault();
        setFilterWord(filterWord)
        // console.log(`On SUBMIT`);
        // console.log(`On recherche le mot : ${filterWord}`);
    }
    return(
        <form onSubmit={submit}>
            <div className={styles.floatingLabel}>
                <input type="search" id="fem-search" name="fem-search" className={styles.formControl} placeholder="blabla" value={filterWord} onChange={(e) => handleChange(e)}/>
                <label htmlFor="fem-search">Search a challenge :</label>
            </div>
        </form>
    )
}