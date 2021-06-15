import React from "react";
import {Button, Container} from "@material-ui/core";
import {deleteProduct, editProduct} from "../../api/productsApi";
import {useTranslation} from "react-i18next";
import {NavLink, useHistory} from "react-router-dom";
import $ from "jquery";

export default ({update}) => {
    const {t} = useTranslation("product")
    const history = useHistory()

    const deleteProducts = () => {
        $.when(
            $('input:checked').each(function () {
                deleteProduct($(this).attr('id'))
            })
        ).then(
            update
        )
    }

    return (
        <>
            <Container style={{width: '100%', display: "flex", justifyContent: "space-around"}}>
                <Button color={"primary"}
                        variant={"outlined"}
                        style={{borderColor: "white"}}
                        to="/admin/products/create"
                        component={NavLink}>
                    {t("new")}
                </Button>
                <Button color={"primary"}
                        variant={"outlined"}
                        style={{borderColor: "white"}}
                        onClick={() => editProduct(history)}>
                    {t("edit")}
                </Button>
                <Button color={"primary"}
                        variant={"outlined"}
                        style={{borderColor: "white"}}
                        onClick={deleteProducts}
                        to={"/admin/products"}
                        component={NavLink}>
                    {t("delete")}
                </Button>
            </Container>
        </>
    )
}