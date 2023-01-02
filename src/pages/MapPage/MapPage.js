import MyNavbar from "../../components/Navbar/MyNavbar";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";

function MapPage() {
    return (
        <Container>
            <MyNavbar mapPage={true}/>
            <div style={{ height: '200px' }}></div>
            map 페이지
            <Footer />
        </Container>
    )
}

export default MapPage;

const Container = styled.div`
    width: 100vw;
    height: 100%;
`;