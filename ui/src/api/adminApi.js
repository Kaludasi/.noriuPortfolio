import HTTP from "./index";

export const fetchAdminDashboardData = () => HTTP.get('/admin')
    .finally(response =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(response), 100)
        }))
