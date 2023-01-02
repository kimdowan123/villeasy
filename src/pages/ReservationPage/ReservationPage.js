import MyNavbar from "../../components/Navbar/MyNavbar";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";

function ReservationPage() {
    return (
        <Container>
            <MyNavbar reservationPage={true}/>
            <div style={{ marginTop: '200px' }}>
                예약페이지
            </div>
            <Footer/>
        </Container>
    )
}

export default ReservationPage;

const Container = styled.div`
    width: 100vw;
    height: 100%;
`;