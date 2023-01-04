import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail'

const ItemListContainer = () => {

    const [detail, setDetail] = useState({})

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/1')
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(json => {
                console.log(json)
                setDetail(json)
            })
            .catch((err) => {
                alert('hubo un error')
            })

    }, [])

    return (
        <div>
            <ItemDetail detail={detail} />
        </div>
    )
}

export default ItemListContainer
