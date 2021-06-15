import {Form, Formik} from "formik";
import Container from "@material-ui/core/Container";
import {FormikInput} from "../FormikInput/FormikInput";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import {loginUser} from "../../api/authApi";
import {Card, CardContent, Divider} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {login as setLogin} from "../../store/slices/userSlice";
import {useHistory, useLocation} from 'react-router-dom';
import {loginValidationSchema} from "../../validation/validationSchemas";

export default () => {
    const {t} = useTranslation("login");
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation()

    const postLogin = (loginData, {setSubmitting}) => {
        setSubmitting(true)
        loginUser(loginData)
            .then(({data: loggedInUser, headers: { authorization }}) => {
                dispatch(
                    setLogin({
                        loggedInUser,
                        jwt: authorization
                    }))
                const from = location.state?.from

                history.push(from || '/')
            })
            .finally(() => setSubmitting(false))
    }

    return (
        <Formik initialValues={{
            email: '',
            password: '',
        }}
                validationSchema={loginValidationSchema}
                onSubmit={postLogin}>
            {props => (
                <>
                    <Container maxWidth={"sm"} style={{margin: "auto"}}>
                        <Card style={{backgroundColor: '#1d1d1d', color: "white"}}>
                            <CardContent>
                                <Form style={{margin: "0 40px", textAlign: "center"}}>
                                    <h2>{t('login')}</h2>
                                    <div>
                                        <FormikInput name="email"
                                                     label={t('email')}
                                                     error={props.touched.email && !!props.errors.email}
                                                     placeholder={t('email')}/>
                                    </div>
                                    <div>
                                        <FormikInput name="password"
                                                     label={t('password')}
                                                     error={props.touched.password && !!props.errors.password}
                                                     placeholder={t('password')}
                                                     type="password"/>
                                    </div>
                                    {!props.isSubmitting ?
                                        <Button className={'btn10'} type="submit" style={{
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
                                <Divider style={{margin: '20px 40px', backgroundColor: "white"}}/>
                                <Form style={{margin: "0 40px", textAlign: "center"}}>
                                    {!props.isSubmitting ?
                                        <Button href={'/signup'} className={'btn10'} style={{
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
                            </CardContent>
                        </Card>
                    </Container>
                </>
            )}
        </Formik>
    )
}
