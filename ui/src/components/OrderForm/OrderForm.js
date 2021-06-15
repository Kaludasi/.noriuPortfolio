import {Form, Formik} from "formik";
import Container from "@material-ui/core/Container";
import {FormikInput, FormikPay, FormikTextarea} from "../FormikInput/FormikInput";
import Button from "@material-ui/core/Button";
import {saveOrder} from "../../api/ordersApi";
import {useTranslation} from "react-i18next";
import {Card, CardContent} from "@material-ui/core";
import {orderValidationSchema} from "../../validation/validationSchemas";
import {useHistory} from "react-router-dom";

export default ({product, personInfo}) => {
    const {t} = useTranslation("order");
    const history = useHistory();

    const save = (formData) => {
        saveOrder(formData)
            .finally(() => history.push("/account"))
    }

    return (
        <Formik initialValues={{
            name: personInfo.name,
            surname: personInfo.surname,
            email: personInfo.email,
            phone: personInfo.phone,
            product: window.location.href.split('/').pop(),
            productDescription: '',
            paymentType: '',
            status: 'laukiamaApmokejimo',
        }}
                validationSchema={orderValidationSchema}
                onSubmit={save}>
            {props => (
                <>
                    <Container maxWidth={"sm"} style={{margin: "auto"}}>
                        <Card style={{backgroundColor: '#1d1d1d'}}>
                            <CardContent>
                                <Form style={{margin: "0 40px", textAlign: "center"}}>
                                    <h2 style={{color: 'white'}}>{t('order')} {product.name}</h2>
                                    <div>
                                        <FormikInput name="name"
                                                     label={t('name')}
                                                     value={props.initialValues.name}
                                                     error={props.touched.name && !!props.errors.name}
                                                     placeholder={t('name')}/>
                                    </div>
                                    <div>
                                        <FormikInput name="surname"
                                                     label={t('surname')}
                                                     value={props.initialValues.surname}
                                                     error={props.touched.surname && !!props.errors.surname}
                                                     placeholder={t('surname')}/>
                                    </div>
                                    <div>
                                        <FormikInput name="email"
                                                     label={t('email')}
                                                     value={props.initialValues.email}
                                                     error={props.touched.email && !!props.errors.email}
                                                     placeholder={t('email')}
                                                     type="email"/>
                                    </div>
                                    <div>
                                        <FormikInput name="phone"
                                                     label={t('phone')}
                                                     value={props.initialValues.phone}
                                                     error={props.touched.phone && !!props.errors.phone}
                                                     placeholder={t('phone')}
                                                     type="phone"/>
                                    </div>
                                    <div>
                                        <FormikTextarea name="productDescription"
                                                        label={t('productDescription')}
                                                        error={props.touched.productDescription && !!props.errors.productDescription}
                                                        type="text"/>
                                    </div>
                                    <div>
                                        <FormikPay name="paymentType"
                                                   label={t('paymentType')}
                                                   error={props.touched.paymentType && !!props.errors.paymentType}
                                                   placeholder={t('paymentType')}
                                                   type="text"/>
                                    </div>
                                    {!props.isSubmitting ?
                                        <Button type="submit" className={'btn10'} style={{
                                            marginTop: "5px",
                                            padding: "20px 30px",
                                            borderRadius: "5px",
                                            border: "1px solid",
                                            borderColor: "#bababa",
                                            width: "100%"
                                        }}>{t('pay')} {product.price}€</Button>
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
