import React from "react";
import {useTranslation} from "react-i18next";

export default () => {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <>
            <a className={'href'} onClick={() => changeLanguage('en')}>EN</a>
            <a className={'href'} onClick={() => changeLanguage('lt')}>LT</a>
        </>
    )
}