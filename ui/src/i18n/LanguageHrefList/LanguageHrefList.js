import React from "react";
import {useTranslation} from "react-i18next";

export default () => {
    const {i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <>
            <button className={'href'} onClick={() => changeLanguage('en')}>EN</button>
            <button className={'href'} onClick={() => changeLanguage('lt')}>LT</button>
        </>
    )
}