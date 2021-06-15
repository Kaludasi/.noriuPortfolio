import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import {Card} from "react-bootstrap";
import {Container} from "@material-ui/core";
import imageOfMe from "../../images/me.jpg"

const useStyles = makeStyles((theme) => ({
    aboutMe: {
        margin: "auto 0",
        padding: "50px",
    }
}))

export default () => {
    const classes = useStyles();
    const {t} = useTranslation("aboutMe");

    return (
        <>
            <Container style={{display: 'flex'}}>
                <Card style={{backgroundColor: '#1d1d1d', width: '60vw', margin: 'auto auto', maxWidth: '400px'}}>
                    <Card.Img src={imageOfMe} style={{width: '60vw', objectFit: 'cover', maxWidth: '400px'}} variant={"top"}>

                    </Card.Img>
                    <Card.Body style={{padding: '25px'}}>
                    <span className={classes.aboutMe} >
                        {t('about')}
                    </span>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}