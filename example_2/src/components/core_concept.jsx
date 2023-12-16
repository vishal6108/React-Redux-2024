import React from 'react'

function CoreConcept({title,description,image}) {
  return (
    <div>
        <ul>
            <li >
                <img src={image} alt='..'/> 
                <h3>{title}</h3>
                <p>{description}</p>
            </li>
        </ul>
    </div>
  )
}

export default CoreConcept