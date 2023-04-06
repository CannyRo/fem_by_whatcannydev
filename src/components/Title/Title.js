import styles from "./Title.module.css"

const title = () => {
    return(
        <header className={styles.title}>
            {/* <h1><span>Frontend Mentor&apos;s challenges</span> <span>coded by WhatCannyDev</span></h1> */}
            <h1>Frontend Mentor&apos;s challenges coded by WhatCannyDev</h1>
        </header>
    )
}

export default title