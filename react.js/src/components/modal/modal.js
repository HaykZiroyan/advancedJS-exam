import Forms from "../formik/formik";
import styles from "./modal.module.css"
import React, { useState } from "react";

function Modal() {
    const [position, setPosition] = useState(false)

  return (
    <div>
        <button className={`${styles.btn}`} onClick = {() => {
            setPosition(!position);
            }} > 
            switch 
        </button>
        {position ? <Forms /> : null}
    </div>

  )
}

export default Modal