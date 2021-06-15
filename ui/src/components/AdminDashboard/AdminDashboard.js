import {Container} from "@material-ui/core";
import {useEffect, useState} from "react";
import {fetchAdminDashboardData} from "../../api/adminApi";
import {useTranslation} from "react-i18next";

export default () => {

    const [adminDashboardData, setAdminDashboardData] = useState([]);
    const {t} = useTranslation("dashboard");

    useEffect(() => {
        fetchAdminDashboardData()
            .then(({data}) => {
                setAdminDashboardData(data)
            })
    }, [])

    return (
        <>
            <Container style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around',
                marginTop: '5%',
                flexWrap: 'wrap'
            }}>
                <Container style={{maxWidth: '300px', backgroundColor: '#1d1d1d', borderRadius: '10px', margin: '5%'}}>
                    <h3>{t("activeOrders")}</h3>
                    <h2>{adminDashboardData.activeOrdersCount}</h2>
                </Container>
                <Container style={{maxWidth: '300px', backgroundColor: '#1d1d1d', borderRadius: '10px', margin: '5%'}}>
                    <h3>{t("totalProfit")}</h3>
                    <h2>{adminDashboardData.totalProfitCount}€</h2>
                </Container>
                <Container style={{maxWidth: '300px', backgroundColor: '#1d1d1d', borderRadius: '10px', margin: '5%'}}>
                    <h3>{t("completedOrders")}</h3>
                    <h2>{adminDashboardData.completedOrderCount}</h2>
                </Container>
            </Container>
        </>
    )
}