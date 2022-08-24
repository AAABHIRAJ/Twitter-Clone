import React from 'react';
import "./SidebarOption.css";

function SidebarOption({active, Icon, text}) {
  return (
      <div className={`sidebaroption ${active && "sidebaroption--active"}`}>
          <Icon className="sidebaroption__icon" />
          <h2>{ text }</h2>
      </div>
  )
}

export default SidebarOption
