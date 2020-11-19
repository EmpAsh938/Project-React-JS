import React from 'react'
import './Info.css'

const Info = (props) => {
    const {img, name, age} = props;
    return (
        <div className="person">
            <img src={img} alt='' />
            <div className='details'>
                <span className="name">{name}</span>
                <span className='age'>{age}</span>
            </div>
        </div>
    )
}

export default Info