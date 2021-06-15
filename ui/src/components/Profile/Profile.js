import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {fetchUserInfo} from "../../api/authApi";
import {Card, CardContent, Divider, Table} from "@material-ui/core";
import {useSelector} from "react-redux";
import Container from "@material-ui/core/Container";

export default () => {
    const {t} = useTranslation("profile")
    const [userInfo, setUserInfo] = useState()
    const [submitting, setSubmitting] = useState(true);
    const email = useSelector(state => state.user.loggedInUser?.email)

    useEffect(() => {
        fetchUserInfo(email)
            .then(({data}) => {
                console.log(data)
                setUserInfo(data)
            }).finally(() => setSubmitting(false))
    }, [])

    return (
        <>
            {
                !submitting && <Container style={{margin: 'auto'}}>
                    <Card className={'customCard'} style={{
                        backgroundColor: '#1d1d1d',
                        color: 'white',
                        margin: "0 auto",
                        maxWidth: '350px',
                        textAlign: 'center'
                    }}>
                        <CardContent>
                            <h3>{t("fullName")}: {userInfo.name} {userInfo.surname}</h3>
                            <h4>{t("email")}: {userInfo.email}</h4>
                            <h4>{t("phone")}: {userInfo.phone}</h4>
                            {userInfo.orders.length!==0 ?
                                <>
                                    <Divider/>
                                    <Table>
                                        <tr>
                                            <td>{t("productName")}</td>
                                            <td>{t("price")}</td>
                                            <td>{t("status")}</td>
                                        </tr>
                                        {userInfo.orders.map(order => {
                                            return(
                                                <tr>
                                                    <td>{order.product.name}</td>
                                                    <td>{order.product.price}€</td>
                                                    <td>{t(`${order.status}`)}</td>
                                                </tr>
                                            )
                                        })}
                                    </Table>
                                </> : ""

                            }
                        </CardContent>
                    </Card>
                </Container>
            }
        </>
    )
}