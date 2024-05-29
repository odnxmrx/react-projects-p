import React, { useState } from "react";
import styles from "./styles.module.css";
import data from "./data";

function Accordion() {

  //single selection acc
  const [selected, setSelected] = useState(null); //'null' for the start of program

  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleId, setMultipleId] = useState([]); //to keep track of the multiple IDs

  function handleSingleSelection(currentId) {
    //toggle functionality:
    setSelected(currentId === selected ? null : currentId);
    //if the 'id' is already set, return 'null'
  }

  function handleMultipleSelection(currentId) {
    //copy so no mutation of state
    let copyMultipleIdArray = [...multipleId];
    /* check if ID is present, (index of id)
    * false (-1) -> push it to the array []
     * true (index) -> we already clicked, so remove it
    */
    const findIndexOfCurrentId = copyMultipleIdArray.indexOf(currentId);
    console.log(findIndexOfCurrentId);
    if(findIndexOfCurrentId === -1) copyMultipleIdArray.push(currentId);
    else copyMultipleIdArray.splice(findIndexOfCurrentId, 1);

    setMultipleId(copyMultipleIdArray); //set state
  }

  console.log('index "selected":' , selected);
  console.log("multiple ID array: ", multipleId);

  return (
    <div className={styles.wrapper}>
      {/* enable multiple selection of cards */}
      <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}>
        {`Multi-select` + (enableMultipleSelection ? ` enabled` : ` disabled`)}
      </button>
      <div className={styles.accordion}>
        {
          data && data.length > 0 ?
            data.map((item) => (
              <div className={styles.item} id={item.id}>
                <div className={styles.title} onClick={
                  enableMultipleSelection //if active, chanche on handler
                    ? () => handleMultipleSelection(item.id)
                    : () => handleSingleSelection(item.id)}
                >
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {
                  // display info
                  selected === item.id || multipleId.indexOf(item.id) !== -1 ?
                    <div className={styles.content}>{item.answer}</div> : null
                }
                {
                  //same approach in broken down to pieces:
                  enableMultipleSelection ?
                  multipleId.indexOf(item.id) !== -1 && (<div className={styles.content}>{item.answer}</div>)
                  :
                  selected === item.id && (<div className={styles.content}>{item.answer}</div>)
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