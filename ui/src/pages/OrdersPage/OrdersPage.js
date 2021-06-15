import React, {useEffect, useState} from "react";
import OrdersTools from "../../components/OrdersTools/OrdersTools";
import {Card, CardContent, Container, Table} from "@material-ui/core";
import {fetchOrders} from "../../api/ordersApi"
import {useTranslation} from "react-i18next";

export default () => {
    const [orders, setOrders] = useState([]);
    const {t} = useTranslation("order")

    const update = () => {
        fetchOrders()
            .then(({data}) => {
                setOrders(data)
            })
    }

    useEffect(() => {
        fetchOrders()
            .then(({data}) => {
                setOrders(data)
            })
    }, [])
    return (
        <>
            <Container style={{height: '80vh', display: 'flex', flexDirection: "column"}}>
                <Card className={'customCard'} style={{backgroundColor: '#1d1d1d', marginTop: '50px'}}>
                    <CardContent>
                        <OrdersTools update={update}/>
                        <Table style={{marginTop: '10px'}}>
                            <tbody>
                                <tr>
                                    <th/>
                                    <th>{t('product')}</th>
                                    <th>{t('price')}</th>
                                    <th>{t('status')}</th>
                                    <th>{t('productDescription')}</th>
                                </tr>
                                {orders.map(order => {
                                    return (
                                        <tr key={order.id}>
                                            <td><input style={{margin: 'auto'}} id={order.id} type={'checkbox'}/></td>
                                            <td>{order.product.name}</td>
                                            <td>{order.product.price}€</td>
                                            <td>{order.status}</td>
                                            <td>{order.productDescription}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}