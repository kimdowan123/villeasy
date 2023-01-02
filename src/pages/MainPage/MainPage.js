import { Container } from "./styled";
import MySlider from "../../components/Slider/MySlider";
import MyNavbar from "../../components/Navbar/MyNavbar";
import Footer from "../../components/Footer/Footer";
import ProductSection from '../../components/ProductSection/ProductSection';

function MainPage() {

    return (
        <Container>
            <MyNavbar mainPage={true} />
            <MySlider />
            <ProductSection />
            <Footer />
        </Container>
    )
}

export default MainPage;






