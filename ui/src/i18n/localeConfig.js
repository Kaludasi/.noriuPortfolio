import * as yup from "yup";

yup.setLocale({
    mixed: {
        required: () => {
            return ({key: 'validation:required'})
        },
    },
    string: {
        min: ({ min }) => {
            return ({key: 'validation:minLength', value: min})
        },
        max: ({ max }) => {
            return ({key: 'validation:maxLength', value: max})
        }
    }
})

export default yup;
