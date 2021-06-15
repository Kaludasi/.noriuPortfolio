import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

function Copyright() {
    return (
        <Typography variant="body1" color="initial">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        display: "flex",
        padding: theme.spacing(3, 2),
        flexDirection: "column",
        marginTop: 'auto',
        textAlign: "center",
        background: 'rgba(0, 0, 0, 0.72)',
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="body1">.noriuPortfolio</Typography>
            <Copyright/>
        </footer>
    )
}
