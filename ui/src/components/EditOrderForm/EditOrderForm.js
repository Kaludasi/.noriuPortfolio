import {Form, Formik} from "formik";
import Container from "@material-ui/core/Container";
import {FormikInput, FormikStatus} from "../FormikInput/FormikInput";
import Button from "@material-ui/core/Button";
import {updateOrder} from "../../api/ordersApi";
import {useTranslation} from "react-i18next";
import {Card, CardContent} from "@material-ui/core";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {editOrderValidationSchema} from "../../validation/validationSchemas";


export default ({order}) => {
    const {t} = useTranslation("order");
    const [newOrder, setNewOrder] = useState(order);
    const history = useHistory();

    const save = () => {
        updateOrder(newOrder)
            .then(() => history.push("/admin/orders"))
    }

    return (
        <Formik initialValues={{
            id: order.id,
            product: order.product.id,
            productDescription: order.productDescription,
            customer: order.customer.email,
            status: order.status,
        }}
                validationSchema={editOrderValidationSchema}
                onSubmit={save}>
            {props => (
                <>
                    <Container maxWidth={"sm"} style={{margin: "auto"}}>
                        <Card style={{backgroundColor: '#1d1d1d'}}>
                            <CardContent>
                                <Form style={{margin: "0 40px", textAlign: "center"}}>
                                    <h2 style={{color: 'white'}}>{order.name} {t('orderis')}</h2>
                                    <div>
                                        <FormikInput name="product"
                                                     label={t('product')}
                                                     value={newOrder.product.name}
                                                     error={!!props.errors.product}
                                                     placeholder={t('product')}
                                                     readonly/>
                                    </div>
                                    <div>
                                        <FormikInput name="productDescription"
                                                     label={t('productDescription')}
                                                     value={newOrder.productDescription}
                                                     onChange={(e) => {
                                                         setNewOrder({...newOrder, productDescription: e.target.value})
                                                     }}
                                                     error={!!props.errors.productDescription}
                                                     placeholder={t('productDescription')}/>
                                    </div>
                                    <div>
                                        <FormikInput name="customer"
                                                     label={t('customer')}
                                                     value={newOrder.customer.name}
                                                     readonly
                                                     error={!!props.errors.customer}
                                                     placeholder={t('customer')}/>
                                    </div>
                                    <div>
                                        <FormikStatus name="status"
                                                      label={t('status')}
                                                      value={newOrder.status}
                                                      onChange={(e) => {
                                                          setNewOrder({...newOrder, status: e.target.value})
                                                      }}
                                                      error={!!props.errors.status}
                                                      placeholder={t('status')}/>
                                    </div>
                                    {!props.isSubmitting ?
                                        <Button className={'btn10'}
                                                type="submit"
                                                style={{
                                            marginTop: "5px",
                                            padding: "20px 30px",
                                            borderRadius: "5px",
                                            border: "1px solid",
                                            borderColor: "#bababa",
                                            width: "100%"
                                        }}>{t('save')}</Button>
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
