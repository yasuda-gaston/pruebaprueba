import React from 'react'

const ItemDetail = ({ detail }) => {
    console.log({ detail });
    return (
        <div>
            <img src={detail.image} alt="ricky" />
            <h1>{detail.name}</h1>
            <h3>{detail.location.name}</h3>
        </div>
    )
}

export default ItemDetail