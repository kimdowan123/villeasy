import { Navbar, NavSection, Li } from './styled'
import { useNavigate } from "react-router-dom";

function MyNavbar(props) {
    const navigate = useNavigate();
    return (
        <Navbar>
            <NavSection>
                <img src={`${process.env.PUBLIC_URL}/image/logo.jpg`} alt="logoImage" onClick={() => {
                        navigate('/')
                    }}/>
                <ul>
                    <Li mypush={props.mainPage} onClick={() => {
                        navigate('/')
                    }}>캠핑용품</Li>
                    <Li mypush={props.reservationPage} onClick={() => {
                        navigate('/reservation')
                    }}>예약안내</Li>
                    <Li mypush={props.mapPage} onClick={() => {
                       navigate('/map')
                    }}>오시는길</Li>
                    <Li mypush={props.QApage} onClick={() => {
                        navigate('/QA')
                    }}>Q&A</Li>
                </ul>
            </NavSection>
        </Navbar>
    )
}

export default MyNavbar;