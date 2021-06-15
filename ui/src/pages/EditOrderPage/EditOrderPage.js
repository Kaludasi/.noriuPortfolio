import React, {useEffect, useState} from "react";
import EditOrderForm from "../../components/EditOrderForm/EditOrderForm";
import {fetchOrder} from "../../api/ordersApi";
import {useParams} from "react-router-dom"

export default () => {
    const [order, setOrder] = useState({})
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchOrder(id)
            .then(({data}) => {
                setOrder(data)
            }).finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            {!isLoading && <EditOrderForm order={order}/>}
        </>
    )
}
