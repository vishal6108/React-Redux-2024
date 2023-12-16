import React from 'react'

function Tabs({button,children,buttonContainers}) {
  const ButtonContainers = buttonContainers
  return (
    <>
    <ButtonContainers>{button}</ButtonContainers>
    {children}
    </>
  )
}

export default Tabs