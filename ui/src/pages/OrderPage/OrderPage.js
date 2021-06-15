import React, {useEffect, useState} from "react";
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {fetchProduct} from "../../api/productsApi";
import OrderForm from "../../components/OrderForm/OrderForm";
import {fetchUserInfo} from "../../api/authApi";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "auto",
        maxWidth: `1000px`,
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    }
}))

export default () => {
    const classes = useStyles();
    const [product, setProduct] = useState({})
    const [personInfo, setPersonInfo] = useState({})
    const loggedInUser = useSelector(state => state.user.loggedInUser);

    useEffect(() => {
        fetchProduct(window.location.href.split("/").pop())
            .then(({data}) => {
                setProduct(data)
            })

        fetchUserInfo(loggedInUser.email)
            .then(({data}) => {
                setPersonInfo(data)
            })
    }, [loggedInUser.email])

    return (
        <>
            <Container className={classes.container}>
                <OrderForm product={product} personInfo={personInfo}/>
            </Container>
        </>
    )
}