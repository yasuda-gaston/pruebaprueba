import React, { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(json => {
                console.log(json)
                setProducts(json)
            })
            .catch((err) => {
                alert('hubo un error')
            })

    }, [])

    return (
        <div>
            <ItemList MiData={products} />
        </div>
    )
}

export default ItemListContainer
