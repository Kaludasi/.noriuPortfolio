import {Form, Formik} from "formik";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {updateProduct} from "../../api/productsApi";
import {FormikInput, FormikTextarea} from "../FormikInput/FormikInput";
import {useTranslation} from "react-i18next";
import {Card, CardContent} from "@material-ui/core";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {editProductValidationSchema} from "../../validation/validationSchemas";


export default ({product}) => {
    const {t} = useTranslation("product")
    const [newProduct, setNewProduct] = useState(product);
    const history = useHistory();

    const save = () => {
        updateProduct(newProduct)
            .then(() => history.push("/admin/products"))
    }

    return (
        <Formik initialValues={{
            id: product.id,
            name: newProduct.name,
            description: newProduct.description,
            price: newProduct.price
        }}
                validationSchema={editProductValidationSchema}
                onSubmit={save}>
            {props => (
                <>
                    <Container maxWidth={"sm"} style={{margin: "auto"}}>
                        <Card className={'customCard'} style={{backgroundColor: '#1d1d1d'}}>
                            <CardContent>
                                <Form style={{margin: "0 40px", textAlign: "center"}}>
                                    <h2 style={{color: 'white'}}>{t("edit")}</h2>
                                    <div>
                                        <FormikInput name="name"
                                                     label={t("name")}
                                                     value={newProduct.name}
                                                     onChange={(e) => {
                                                         setNewProduct({...newProduct, name: e.target.value})
                                                     }}
                                                     error={!!props.errors.name}
                                        />
                                    </div>
                                    <div>
                                        <FormikTextarea name="description"
                                                        label={t("description")}
                                                        value={newProduct.description}
                                                        onChange={(e) => {
                                                            setNewProduct({...newProduct, description: e.target.value})
                                                        }}
                                                        error={!!props.errors.description}
                                                        placeholder={t("description")}/>
                                    </div>
                                    <div>
                                        <FormikInput name="price"
                                                     label={t("price")}
                                                     value={newProduct.price}
                                                     onChange={(e) => {
                                                         setNewProduct({...newProduct, price: e.target.value})
                                                     }}
                                                     error={!!props.errors.price}
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
