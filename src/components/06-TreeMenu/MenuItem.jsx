import React from "react";

//2nd child - single item from menu
function MenuItem({item}){
  console.log(item)
  return(
    <li>
      <p>{item.label}</p>
      check if current item has 'children'
    </li>
  )
}

export default MenuItem;