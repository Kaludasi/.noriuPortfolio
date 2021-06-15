import {Form, Formik} from "formik";
import Container from "@material-ui/core/Container";
import {FormikInput} from "../FormikInput/FormikInput";
import Button from "@material-ui/core/Button";
import {registerUser} from "../../api/authApi";
import {Card, CardContent, Divider, Snackbar} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
import {registerValidationSchema} from "../../validation/validationSchemas";
import {useState} from "react";

export default () => {
    const {t} = useTranslation("signup");
    const history = useHistory()
    const [errorMessage, setErrorMessage] = useState(undefined)
    const [submitting, setSubmitting] = useState(false)

    const register = (values) => {
        setSubmitting(true)
        registerUser(values)
            .then(() => history.push("/login"))
            .catch(error => {
                setErrorMessage(error.response.data.message);
                setOpen(true)
            }).finally(() => setSubmitting(false))

    }

    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Formik initialValues={{
            name: '',
            surname: '',
            email: '',
            phone: '',
            password: '',
            repeatPassword: ''
        }}
                validationSchema={registerValidationSchema}
                onSubmit={register}>
            {props => (
                <>
                    <Container maxWidth={"sm"} style={{margin: "auto"}}>
                        <Card style={{backgroundColor: '#1d1d1d', color: "white"}}>
                            <CardContent>
                                <Form style={{margin: "0 40px", textAlign: "center"}}>
                                    <h2>{t('signup')}</h2>
                                    <div>
                                        <FormikInput name="name"
                                                     label={t('name')}
                                                     error={props.touched.name && !!props.errors.name}
                                                     placeholder={t('name')}/>
                                    </div>
                                    <div>
                                        <FormikInput name="surname"
                                                     label={t('surname')}
                                                     error={props.touched.surname && !!props.errors.surname}
                                                     placeholder={t('surname')}/>
                                    </div>
                                    <div>
                                        <FormikInput name="email"
                                                     label={t('email')}
                                                     error={props.touched.email && !!props.errors.email}
                                                     placeholder={t('email')}/>
                                    </div>
                                    <div>
                                        <FormikInput name="phone"
                                                     label={t('phone')}
                                                     error={props.touched.phone && !!props.errors.phone}
                                                     placeholder={t('phone')}/>
                                    </div>
                                    <div>
                                        <FormikInput name="password"
                                                     label={t('password')}
                                                     error={props.touched.password && !!props.errors.password}
                                                     placeholder={t('password')}
                                                     type="password"/>
                                    </div>
                                    <div>
                                        <FormikInput name="repeatPassword"
                                                     label={t('repeatPassword')}
                                                     error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                                     placeholder={t('repeatPassword')}
                                                     type="password"/>
                                    </div>
                                    {!submitting ?
                                        <Button className={'btn10'} type="submit" style={{
                                            marginTop: "5px",
                                            padding: "20px 30px",
                                            borderRadius: "5px",
                                            border: "1px solid",
                                            borderColor: "#bababa",
                                            width: "100%"
                                        }}>{t('signup')}</Button>
                                        :
                                        <span>{t('submitting')}</span>}
                                </Form>
                                <Divider style={{margin: '20px 40px', backgroundColor: "white"}}/>
                                <Form style={{margin: "0 40px", textAlign: "center"}}>
                                    {!submitting ?
                                        <Button href={'/login'} className={'btn10'} style={{
                                            marginTop: "5px",
                                            padding: "20px 30px",
                                            borderRadius: "5px",
                                            border: "1px solid",
                                            borderColor: "#bababa",
                                            width: "100%"
                                        }}>{t('login')}</Button>
                                        :
                                        <span>{t('submitting')}</span>}
                                </Form>
                            </CardContent>
                        </Card>
                    </Container>
                    <Snackbar open={open}
                              autoHideDuration={5000}
                              onClose={handleClose}
                              message={errorMessage}
                              anchorOrigin={{horizontal: "left", vertical: "bottom"}}
                              action={
                                  <Button color="secondary"
                                          size="small"
                                          onClick={() => setOpen(false)}
                                  >X</Button>
                              }
                    />
                </>
            )}
        </Formik>
    )
}
