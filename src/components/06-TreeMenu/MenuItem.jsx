import React, { useState } from "react";
import MenuList from "./MenuList";

//2nd child - single item from menu
function MenuItem({ item }) {

  //functionality to toggle on button click
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

  const itemHasChildren = item && item.children && item.children.length > 0;
  // console.log('const chekea, bool: ', itemHasChildren);

  function handleToggleChildrenBtn(currLabel) {
    setDisplayCurrentChildren({ //a new obj
      ...displayCurrentChildren, //keep old state values
      [currLabel]: !displayCurrentChildren[currLabel], //add the 'label' passed as param
      // AND asign true/false value depending if it exists ('label') in the obj
    })
  }
  // console.log('displayCurrentChildren arroja: ', displayCurrentChildren);

  return (
    <li>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <p>{item.label}</p>
        { // + - buttons to click
          itemHasChildren && <span onClick={() => handleToggleChildrenBtn(item.label)}>
            {
              displayCurrentChildren[item.label] ? "-" : "+"
            }
          </span>
        }
      </div>
      {
        //check if current item has 'children' to display
        itemHasChildren && displayCurrentChildren[item.label] ? (
          <MenuList list={item.children} />
        )
          : null
      }
    </li>
  )
}

export default MenuItem;