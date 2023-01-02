import MyNavbar from "../../components/Navbar/MyNavbar";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";

function QApage() {
    return (
        <Container>
            <MyNavbar QApage={true} />
            <div style={{ marginTop: '200px' }}>
                QApages
            </div>
            <Footer/>
        </Container>
    )
}

export default QApage;

const Container = styled.div`
    width: 100vw;
    height: 100%;
`;