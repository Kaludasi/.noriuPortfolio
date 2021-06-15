import React from "react";
import {Button, Container} from "@material-ui/core";
import {deleteOrder, editOrder} from "../../api/ordersApi";
import {useTranslation} from "react-i18next";
import {NavLink, useHistory} from "react-router-dom";
import $ from "jquery";

export default ({update}) => {
    const {t} = useTranslation("order");
    const history = useHistory()

    const deleteOrders = () => {
        $.when(
            $('input:checked').each(function () {
                deleteOrder($(this).attr('id'))
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
                        onClick={() => editOrder(history)}>
                    {t('edit')}
                </Button>
                <Button color={"primary"}
                        variant={"outlined"}
                        style={{borderColor: "white"}}
                        onClick={deleteOrders}
                        to={"/admin/orders"}
                        component={NavLink}>
                    {t('delete')}
                </Button>
            </Container>
        </>
    )
}