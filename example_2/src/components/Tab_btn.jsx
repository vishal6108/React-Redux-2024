import React from 'react'

function TabButton({label,onSelect,isSelected}) {
  return <li><button className={isSelected ? 'active' : ''} onClick={onSelect}>{label}</button></li>
}

export default TabButton