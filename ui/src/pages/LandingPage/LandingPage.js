import React, {useEffect, useState} from "react";
import Product from "../../components/Product/Product";
import {CircularProgress, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {fetchProducts} from "../../api/productsApi";
import AboutMe from "../../components/AboutMe/AboutMe";
import Contacts from "../../components/Contacts/Contacts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import image2 from "../../images/right.png";
import image1 from "../../images/left.png";


const useStyles = makeStyles(() => ({
    container: {
        margin: 'auto',
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '0',
        minHeight: '100vh',
        scrollSnapAlign: 'start',
    },
    head: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '4vw',
        height: '80vh',
        marginBottom: '10vh',
        scrollSnapAlign: 'end',
    },
    lastCont: {
        display: 'flex',
        padding: '0',
        justifyContent: 'space-around',
        marginTop: '10vh',
        height: '80vh',
        scrollSnapAlign: 'start',
    }
}))

export default () => {
    const classes = useStyles();

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
            .then(({data}) => {
                setProducts(data)
            }).finally(() => setLoading(false))
    }, [])

    return (
        <>
            <Container className={"con"}>
                <Container className={classes.head} >
                    <span className={'name'}>.noriuPotfolio</span>
                </Container>
                <Container style={{left: 0, right: 0, bottom: '7vh', textAlign:'center', position: 'fixed', fontSize: '2rem'}}>
                    <FontAwesomeIcon icon={['fa', 'angle-double-down']}
                                     className={'arrowDown'}
                                     style={{color: 'white'}}/>
                </Container>
                <img src={image2}
                     className={"right"}
                     alt={"a"}/>
                <img src={image1}
                     className={"left"}
                     alt={"a"}/>
                <Container className={classes.container}
                           id="productsDiv">
                    {loading ? <CircularProgress/> : products.map(
                        product => <Product product={product}/>
                    )}
                    {
                        products.length ? '' :
                            <span style={{margin: 'auto 0'}}>Atsiprašome, bet šiuo metu neturime ką pasiūlyti</span>
                    }
                </Container>
                <Container id="aboutMeDiv"
                           className={classes.container}>
                    <AboutMe/>
                </Container>
                <Container id="contactsDiv"
                           className={classes.lastCont}>
                    <Contacts/>
                </Container>
            </Container>
        </>
    )
}