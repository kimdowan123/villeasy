import MyNavbar from "../../components/Navbar/MyNavbar";
import styled from "styled-components";

function MapPage() {
    return (
        <Container>
            <MyNavbar mapPage={true}/>
            <div style={{ height: '200px' }}></div>
            map 페이지
        </Container>
    )
}

export default MapPage;

const Container = styled.div`
    width: 100vw;
    height: 100%;
`;