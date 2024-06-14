import React from "react";
import MenuList from "./MenuList";
import {menus} from "./data.js";

//parent component
function TreeMenu() {
  
  return (
    <div className="treeViewContainer">
      <MenuList list={menus} />
    </div>
  )
}

export default TreeMenu;