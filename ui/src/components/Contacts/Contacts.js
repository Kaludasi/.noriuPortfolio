import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import {Container, Icon, IconButton} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "auto",
        maxWidth: `1200px`,
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap",
        color: "white"
    }
}))

export default () => {
    const classes = useStyles();
    const {t} = useTranslation("contacts");
    return (
        <>
            <Container className={classes.container}>
                <a className={'btn-two email'}
                   style={{color: "white", margin: "20px 0"}}
                   href={'mailto:simo.klaudijus@gmail.com'}>
                    <FontAwesomeIcon style={{color: "white", margin: "auto 0"}}
                                     icon={["far", "envelope"]}
                                     id={'email'}
                                     className={'onHoverAppear'}/>
                    {t('mailUs')}
                </a>
                <a className={'btn-two phone'}
                   style={{color: "white", margin: "20px 0"}}
                   href={'tel:+37064180830'}>
                    <FontAwesomeIcon
                        icon={["fas", "phone"]}
                        className={'onHoverAppear'}
                        style={{color: "white", margin: "auto 0"}}/>
                    {t('callUs')}
                </a>
            </Container>
        </>
    )
}