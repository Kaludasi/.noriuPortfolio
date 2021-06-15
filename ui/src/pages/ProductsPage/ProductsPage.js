import React, {useEffect, useState} from "react";
import ProductsTools from "../../components/ProductsTools/ProductsTools";
import {fetchProducts} from "../../api/productsApi";
import {Card, CardContent, Container, Table} from "@material-ui/core";
import {useTranslation} from "react-i18next";

export default () => {
    const [products, setProducts] = useState([]);
    const {t} = useTranslation("product")

    const update = () => {
        fetchProducts()
            .then(({data}) => {
                setProducts(data)
            })
    }

    useEffect(() => {
        fetchProducts()
            .then(({data}) => {
                setProducts(data)
            })
    }, [])

    return (
        <>
            <Container style={{height: '80vh', display: 'flex', flexDirection: "column"}}>
                <Card className={'customCard'} style={{backgroundColor: '#1d1d1d', marginTop: '50px'}}>
                    <CardContent>
                        <ProductsTools update={update}/>
                        <Table style={{marginTop: '10px'}}>
                            <tr>
                                <th/>
                                <th>{t("name")}</th>
                                <th>{t("price")}</th>
                                <th>{t("description")}</th>
                            </tr>
                            {products.map(product => {
                                return (
                                    <tr>
                                        <td><input style={{margin: 'auto'}} id={product.id} type={'checkbox'}/></td>
                                        <td>{product.name}</td>
                                        <td>{product.price}€</td>
                                        <td>{product.description}</td>
                                    </tr>
                                )
                            })}
                        </Table >
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}