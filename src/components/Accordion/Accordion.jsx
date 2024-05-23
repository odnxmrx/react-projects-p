import React, { useState } from "react";
import styles from "./styles.module.css";
import data from "./data";

function Accordion() {

  //single selection acc
  const [selected, setSelected] = useState(null); //'null' for the start of program

  function handleSingleSelection(currentId) {
    //console.log('current id: ', currentId);
    //setSelected(currentId);
    //toggle functionality:
    setSelected(currentId === selected ?  null : currentId); 
    //if the 'id' is already set, return 'null'
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        {
          data && data.length > 0 ?
            data.map((item) => (
              <div className={styles.item}>
                <div className={styles.title} onClick={() => handleSingleSelection(item.id)}>
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {
                  selected === item.id ?
                  <div className={styles.content}>{item.answer}</div> : null
                }
              </div>
            ))
            :
            <div>
              No data was found.
            </div>
        }
      </div>
    </div>
  )
}

export default Accordion;