import React from "react";
import MenuItem from "./MenuItem";

//1st child component, list of items
function MenuList({list = []}) {
  
  return(
    <ul className="uListContainer">
      {
        list && list.length > 0 ? 
        list.map(listItem => <MenuItem item={listItem} />)
        : null
      }
    </ul>
  )
}

export default MenuList;