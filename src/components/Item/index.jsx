import React from 'react'

const Item = ({ products }) => {
    return (
        <div className="card" style={{ width: `18rem` }}>
            <img className="card-img-top" src={products.image} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{products.title}</h5>
                <p className="card-text">{products.text}</p>
                <h3>{products.price}</h3>
                <a href="/#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Item