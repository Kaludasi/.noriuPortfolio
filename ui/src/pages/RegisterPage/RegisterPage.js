import React from "react";
import UserRegistration from "../../components/UserRegistration/UserRegistration";
import {Container} from "@material-ui/core";

export default () => {
    return (
        <>
            <Container style={{height: '80vh', display: "flex", justifyContent: "center"}}>
                <UserRegistration />
            </Container>
        </>
    )
}