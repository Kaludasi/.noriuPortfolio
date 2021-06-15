import Yup from "../i18n/localeConfig";

export const orderValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required()
        .min(3)
        .max(50),
    surname: Yup.string()
        .required()
        .min(3)
        .max(50),
    email: Yup.string()
        .email()
        .required(),
    phone: Yup.string()
        .required(),
    paymentType: Yup.string()
        .required(),
})

export const productValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required()
        .min(3)
        .max(50),
    description: Yup.string()
        .required()
        .min(3)
        .max(100),
    price: Yup.number()
        .required()
})

export const editOrderValidationSchema = Yup.object().shape({
    product: Yup.string()
        .required(),
    productDescription: Yup.string(),
    customer: Yup.string()
        .required(),
    status: Yup.string()
        .required(),
})

export const editProductValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required()
        .min(3)
        .max(50),
    description: Yup.string()
        .required()
        .min(3)
        .max(100),
    price: Yup.number()
        .required()
})

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .required()
})

export const registerValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required()
        .min(3)
        .max(50),
    surname: Yup.string()
        .required()
        .min(3)
        .max(50),
    email: Yup.string()
        .email()
        .required(),
    phone: Yup.string()
        .required(),
    password: Yup.string()
        .min(8)
        .required(),
    repeatPassword: Yup.string()
        .min(8)
        .required()
        .oneOf([Yup.ref('password')], "Blogas")
})