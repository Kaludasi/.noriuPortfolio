import {Form, Formik} from "formik";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {saveProduct} from "../../api/productsApi";
import {FormikInput, FormikTextarea} from "../FormikInput/FormikInput";
import {useTranslation} from "react-i18next";
import {Card, CardContent} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {productValidationSchema} from "../../validation/validationSchemas";


export default () => {
    const {t} = useTranslation("product")
    const history = useHistory()

    const save = (formData) => {
        saveProduct(formData)
            .then(() => history.push("/admin/products"))
    }

    return (
        <Formik initialValues={{
            name: '',
            description: '',
            price: ''
        }}
                validationSchema={productValidationSchema}
                onSubmit={save}>
            {props => (
                <>
                    <Container maxWidth={"sm"} style={{margin: "auto"}}>
                        <Card className={'customCard'} style={{backgroundColor: '#1d1d1d'}}>
                            <CardContent>
                                <Form style={{margin: "0 40px", textAlign: "center"}}>
                                    <h2 style={{color: "white"}}>{t("new")}</h2>
                                    <div>
                                        <FormikInput name="name"
                                                     label={t("name")}
                                                     error={!!props.errors.name}
                                                     placeholder={t("name")}/>
                                    </div>
                                    <div>
                                        <FormikTextarea name="description"
                                                        label={t("description")}
                                                        error={!!props.errors.description}
                                                        placeholder={t("description")}/>
                                    </div>
                                    <div>
                                        <FormikInput name="price"
                                                     label={t("price")}
                                                     error={!!props.errors.price}
                                                     placeholder={t("price")}
                                                     type="number"/>
                                    </div>
                                    {!props.isSubmitting ?
                                        <Button className={'btn10'}
                                                type="submit"
                                                style={{
                                                    padding: "20px 10px", border: '1px white solid',
                                                    width: "100%"
                                                }}>{t("save")}</Button>
                                        :
                                        <span>{t("submitting")}</span>}
                                </Form>
                            </CardContent>
                        </Card>
                    </Container>
                </>
            )}
        </Formik>
    )
}
