import UserLogin from "../../components/UserLogin/UserLogin";
import Container from "@material-ui/core/Container";

export default () => {
    return (
        <>
            <Container style={{height: '80vh', display: "flex", justifyContent: "center"}}>
                <UserLogin/>
            </Container>
        </>
    )
}