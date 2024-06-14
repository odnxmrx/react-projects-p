import React from "react";
import MenuList from "./MenuList";

//2nd child - single item from menu
function MenuItem({item}){
  // console.log(item)
  return(
    <li>
      <p>{item.label}</p>
      {
        //check if current item has 'children'
        item && item.children && item.children.length > 0 ? (
          <MenuList list={item.children} />
        )
        : null
      }
    </li>
  )
}

export default MenuItem;