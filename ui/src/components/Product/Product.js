import React from "react";
import {Box, Card, CardContent, Link} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    box: {
        padding: '50px',
        textAlign: 'center',
        minWidth: `300px`,
        maxWidth: `400px`,
        display: "flex",
        flexDirection: "column",
        margin: 'auto'
    },
    marginBottom: {
        marginBottom: "10px"
    }
}))


export default ({product}) => {
    const classes = useStyles()
    const {t} = useTranslation("product");

    return (
        <>
            <Box className={classes.box}>
                <Card style={{backgroundColor: '#1d1d1d'}}>
                    <CardContent style={{display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{color: "white"}}>{product.name}</h3>
                        <span className={classes.marginBottom}>{product.description}</span>
                        <span className={classes.marginBottom}>{t("price")}: {product.price} €</span>
                        <Link className={'btn10'}
                              style={{textDecoration: 'none', width: '50%', margin: '0 auto', borderColor: 'white'}}
                              to={`/products/${product.id}`}
                              color={"primary"}
                              component={NavLink}>{t("order")}
                        </Link>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}
