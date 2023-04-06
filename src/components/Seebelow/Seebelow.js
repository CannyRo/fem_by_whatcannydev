import Link from "next/link";
import styles from "./Seebelow.module.css";

export default function Seebelow(){
    return(
        <div className={styles.seeBelow}>
            <h3>Or browse the list below</h3>
            <Link href="/#liste" scroll={false}>
                <div className={styles.arrowBelow}>
                    <div></div>
                    <div></div>
                </div>
            </Link>
        </div>
    )
} 