import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Drawer, Link, SwipeableDrawer} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import LanguageHrefList from "../../i18n/LanguageHrefList/LanguageHrefList";
import scrollToRef from "../../style";
import {logout} from "../../api/authApi";
import store from "../../store/store";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    header: {
        backgroundColor: '#1C00ff00',
        color: 'black',
        width: '100%',
        display: "flex",
        justifyContent: "space-around"
    }
}))

export default () => {
    const [responsiveOpen, setResponsiveOpen] = useState(false)
    const loggedInUser = useSelector(state => state.user.loggedInUser);
    const {t} = useTranslation("header");
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(

        )
    }

    return (
        <>
            <div className={'responsiveHeader'}>
                <Link to={"/"}
                      component={NavLink}
                      style={{width: '100px', margin: 'auto 5%', textDecoration: 'none'}}>
                    <h1 style={{fontFamily: 'Michroma, sans-serif'}}>
                        .noriuPortfolio
                    </h1>
                </Link>
                <a style={{margin: "auto 6%"}}
                   onClick={() => setResponsiveOpen(!responsiveOpen)}>
                    <FontAwesomeIcon style={{fontSize: '25px', color: "white"}} icon={["fa", "bars"]}/>
                </a>
            </div>
            <SwipeableDrawer open={responsiveOpen}
                    variant={"persistent"}
                    onClose={() => setResponsiveOpen(false)}
                    onOpen={() => setResponsiveOpen(true)}
                    ModalProps={{hideBackdrop: true}}
                    anchor={'right'}
                    style={{zIndex: 3}}>
                <div style={{paddingTop: '10vh', display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <LanguageHrefList/>
                    </div>
                    {loggedInUser ?
                        <>
                            <h2 style={{margin: '5px'}}>{loggedInUser.fullName}</h2>
                            <div>
                                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                                    <h3>{t('mainMenu')}</h3>
                                    <Link to="/account"
                                          className={'btn10'}
                                          style={{margin: '10px'}}
                                          component={NavLink}>
                                        {t('profile')}
                                    </Link>
                                    <a
                                        onClick={() => logoutUser}
                                        className={'btn10'}
                                        style={{margin: '10px'}}>
                                        {t('logout')}
                                    </a>
                                </div>
                                {loggedInUser.role.roleName === "ADMIN" ?
                                    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                                        <h3>{t('adminMenu')}</h3>
                                        <Link to="/admin"
                                              className={'btn10'}
                                              style={{margin: '10px'}}
                                              component={NavLink}>
                                            {t('dashboard')}
                                        </Link>
                                        <Link to="/admin/products"
                                              className={'btn10'}
                                              style={{margin: '10px'}}
                                              component={NavLink}>
                                            {t('products')}
                                        </Link>
                                        <Link to="/admin/orders"
                                              className={'btn10'}
                                              style={{margin: '10px'}}
                                              component={NavLink}>
                                            {t('orders')}
                                        </Link>
                                    </div> : <></>

                                }
                            </div>
                        </>
                        :
                        <>
                            <Link to={"/login"}
                                  className={'btn10'}
                                  style={{margin: '10px'}}
                                  component={NavLink}>
                                {t('login')}
                            </Link>
                            <Link to={"/signup"}
                                  className={'btn10'}
                                  style={{margin: '10px'}}
                                  component={NavLink}>
                                {t('signup')}
                            </Link>
                        </>
                    }


                    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                        <h3>{t('mainMenu')}</h3>
                        <Link to="/"
                              onClick={() => scrollToRef("productsDiv")}
                              className={'btn10'}
                              style={{margin: '10px'}}
                              component={NavLink}>
                            {t('products')}
                        </Link>
                        <Link to="/"
                              onClick={() => scrollToRef("aboutMeDiv")}
                              className={'btn10'}
                              style={{margin: '10px'}}
                              component={NavLink}>
                            {t('aboutMe')}
                        </Link>
                        <Link
                            to="/"
                            onClick={() => scrollToRef("contactsDiv")}
                            className={'btn10'}
                            style={{margin: '10px'}}
                            component={NavLink}>
                            {t('contacts')}
                        </Link>
                    </div>
                    <div style={{position: 'absolute', bottom: 10, width: '100%', textAlign: 'center'}}>
                        <a style={{margin: "0 20px"}}
                           href={'mailto:simo.klaudijus@gmail.com'}>
                            <FontAwesomeIcon style={{color: "black", margin: "auto 0"}}
                                             icon={["far", "envelope"]}/>
                        </a>
                        <a style={{margin: "0 20px"}}
                           href={'tel:+37064180830'}>
                            <FontAwesomeIcon
                                icon={["fas", "phone"]}
                                style={{color: "black", margin: "auto 0"}}/>
                        </a>
                    </div>
                </div>
            </SwipeableDrawer>
        </>
    )
}
