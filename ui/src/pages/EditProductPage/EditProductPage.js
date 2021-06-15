import React, {useEffect, useState} from "react";
import {fetchProduct} from "../../api/productsApi";
import EditProductForm from "../../components/EditProductForm/EditProductForm";

export default ({id}) => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchProduct(id)
            .then(({data}) => {
                setProduct(data)
            }).finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            {!isLoading && <EditProductForm product={product}/>}
        </>
    )
}