import {Redirect, Route, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const SecuredRoute = ({role, ...props}) => {
    const location = useLocation()
    let userRoleName = useSelector(state => state.user.loggedInUser?.role.roleName)
    const authorized = role.includes(userRoleName)

    return authorized ?
        <Route {...props} /> :
        <Redirect to={{
            pathname: '/login',
            state: {
                from: location
            }
        }}/>
}

export default SecuredRoute