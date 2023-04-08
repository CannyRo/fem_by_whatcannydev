import styles from "./Cursor.module.css";
import { useEffect } from "react";


export default function Cursor(){

    useEffect(() => {
        let cursorPosition = document.getElementById("cursor"); 
        document.addEventListener("mousemove", ({pageX, pageY}) => {
            // console.log("clientX : ", pageX);
            // console.log("clientY : ", pageY);
            let cursorPositionX = pageX-16;
            let cursorPositionY = pageY-16;
    
            cursorPosition.style.transform = "translate("+cursorPositionX+"px, "+cursorPositionY+"px)";
            }
        )
    });
    return(
        <div id="cursor" className={styles.cursorCircle}></div>
    )
}