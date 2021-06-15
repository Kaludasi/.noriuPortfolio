import Header from "./components/Header/Header";
import Content from "./components/Content";
import React from "react";
import {makeStyles, MuiThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router} from "react-router-dom"
import {storeScroll} from "./animations";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faAngleDoubleDown, faBars, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {far} from "@fortawesome/free-regular-svg-icons";
import background from "./images/(2).png"
import Footer from "./components/Footer/Footer";
import {createMuiTheme} from "@material-ui/core";
import {Provider} from "react-redux";
import store from "./store/store";

library.add(far, faPhone, faEnvelope, faAngleDoubleDown, faBars)

const theme = createMuiTheme({
    palette: {
        primary: {main: "#ffffff"}
    }
})

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    content: {
        paddingTop: '10vh',
        display: "flex",
        justifyContent: "center",
        minHeight: '80vh'
    },
    left: {
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0',
        width: '100%'

    },
    right: {
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0',
        width: '100%'
    },
    button: {
        borderColor: theme.palette.primary
    }
}));

function App() {
    const classes = useStyles()

    storeScroll()
    return (
        <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <Router>
                        <div className={classes.root}>
                            <img src={background} alt={"a"} className={"background"}/>
                            <Header/>
                            <div className={classes.content}>
                                <Content/>
                            </div>
                            <Footer/>
                        </div>
                    </Router>
                </MuiThemeProvider>
        </Provider>
    );
}

export default App;

