import MyNavbar from "../../components/Navbar/MyNavbar";
import styled from "styled-components";

function QApage() {
    return (
        <Container>
            <MyNavbar QApage={true} />
            <div style={{ marginTop: '200px' }}>
                QApage
            </div>
        </Container>
    )
}

export default QApage;

const Container = styled.div`
    width: 100vw;
    height: 100%;
`;