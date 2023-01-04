import React from 'react'
import Item from '../Item'

const ItemList = ({ MiData }) => {
    return (
        <div>

            {MiData.map(producto => {
                return (
                    <Item products={producto} key={producto.id} />
                )
            })}

        </div>
    )
}

export default ItemList
