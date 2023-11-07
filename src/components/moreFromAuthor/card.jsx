import React from 'react'

const SideCard = ({story:{id,title,author,image}}) => {
  return (
    <div>
        <div className="sidecard-box">
            <div className="sidecard-image">
                <img src={image} alt="Image" />
            </div>
            <div className="sidecard-text">
                <h3>{title.slice(0,19)}..</h3>
                <p>{author}</p>
            </div>
        </div>
    </div>
  )
}

export default SideCard