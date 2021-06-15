import {FormControl, FormHelperText, InputLabel, MenuItem, NoSsr} from "@material-ui/core";
import {ErrorMessage, Field} from "formik";
import {StyledOutlinedComponents, StyledOutlinedSelect} from "../../customization/StyledOutlinedComponents";
import {useTranslation} from "react-i18next";

export const FormikInput = ({name, label, error, value, readonly, placeholder = "Type...", ...props}) => {
    const {t, i18n} = useTranslation("validation");

    return (
        <FormControl error={error}
                     fullWidth
                     key={i18n.language}
                     variant="outlined"
                     margin="dense">
            <InputLabel style={{color: "white"}}
                        htmlFor={name}>{label}</InputLabel>
            <NoSsr>
                <Field id={name}
                       name={name}
                       label={label}
                       readOnly={readonly}
                       placeholder={placeholder}
                       {...props}
                       as={StyledOutlinedComponents}
                       value={value}/>
            </NoSsr>
            <ErrorMessage name={name}>
                {msg =>
                    <FormHelperText>{t(label)} {t(msg.key, {value: msg.value})}</FormHelperText>
                }
            </ErrorMessage>
        </FormControl>
    )
}

export const FormikTextarea = ({name, label, error, placeholder = "Type...", ...props}) => {
    const {t, i18n} = useTranslation("validation");

    return (
        <FormControl error={error}
                     fullWidth
                     key={i18n.language}
                     variant="outlined" margin="dense">
            <InputLabel style={{color: "white"}}
                        htmlFor={name}>{label}</InputLabel>
            <NoSsr>
                <Field multiline
                       id={name}
                       name={name}
                       label={label}
                       placeholder={placeholder}
                       {...props}
                       as={StyledOutlinedComponents}/>
            </NoSsr>
            <ErrorMessage name={name} component={FormHelperText}>
                {msg =>
                    <FormHelperText>{t(label)} {t(msg.key, {value: msg.value})}</FormHelperText>
                }
            </ErrorMessage>
        </FormControl>
    )
}

export const FormikPay = ({name, label, error, placeholder = "Type...", ...props}) => {
    const {t, i18n} = useTranslation("validation");

    return (
        <FormControl
            error={error}
            fullWidth
            key={i18n.language}
            variant="outlined"
            margin="dense">
            <InputLabel htmlFor={name}
                        style={{color: "white"}}>{label}</InputLabel>
            <Field as={StyledOutlinedSelect}
                   id={name}
                   name={name}
                   label={label}
                   {...props}
                   variant="outlined" select="true">
                <MenuItem value="swedbank">Swedbank</MenuItem>
                <MenuItem value="seb">SEB</MenuItem>
                <MenuItem value="bankinisPavedimas">Bank transfer</MenuItem>
                <MenuItem value="momentinisApmokejimas">One-time payment</MenuItem>
            </Field>
            <ErrorMessage name={name} component={FormHelperText}>
                {msg =>
                    <FormHelperText>{t(label)} {t(msg.key, {value: msg.value})}</FormHelperText>
                }
            </ErrorMessage>
        </FormControl>
    )
}


export const FormikStatus = ({name, label, error, value, onChange, placeholder = "Type...", ...props}) => {
    const {t, i18n} = useTranslation("validation");

    return (
        <FormControl error={error}
                     fullWidth
                     key={i18n.language}
                     variant="outlined"
                     margin="dense">
            <InputLabel htmlFor={name}
                        style={{color: "white"}}>{label}</InputLabel>
            <Field as={StyledOutlinedSelect}
                   value={value}
                   id={name}
                   onChange={onChange}
                   name={name}
                   label={label}
                   {...props}
                   variant="outlined"
                   select="true">
                <MenuItem value="laukiamaApmokejimo">Laukiama apmokejimo</MenuItem>
                <MenuItem value="priimta">Priimta</MenuItem>
                <MenuItem value="vykdoma">Vykdoma</MenuItem>
                <MenuItem value="ivykdyta">Ivykdyta</MenuItem>
            </Field>
            <ErrorMessage name={name} component={FormHelperText}>
                {msg =>
                    <FormHelperText>{t(label)} {t(msg.key, {value: msg.value})}</FormHelperText>
                }
            </ErrorMessage>
        </FormControl>
    )
}
