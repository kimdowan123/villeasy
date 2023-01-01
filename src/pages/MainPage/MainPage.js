import { Container } from "./styled";
import MySlider from "../../components/Slider/MySlider";
import MyNavbar from "../../components/Navbar/MyNavbar";

function MainPage() {

    return (
        <Container>
            <MyNavbar mainPage={true}/>
            <div style={{ height: '100px' }}></div>
            <MySlider/>
        </Container>
    )
}

export default MainPage;






