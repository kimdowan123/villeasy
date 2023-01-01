import { Container, Navbar, NavSection } from "./styled";
import MySlider from "../../components/Slider/MySlider";

function MainPage() {
    
    return (
        <Container>
            <Navbar>
                <NavSection>
                    <img src={`${process.env.PUBLIC_URL}/image/logo.jpg`} alt="logoImage" />
                    <ul>
                        <li>캠핑용품</li>
                        <li>예약안내</li>
                        <li>오시는길</li>
                        <li>Q&A</li>
                    </ul>
                </NavSection>
            </Navbar>
            <div style={{height:'100px'}}></div>
            <MySlider></MySlider>
           
        </Container>
    )
}

export default MainPage;






