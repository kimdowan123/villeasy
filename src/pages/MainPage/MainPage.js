import styled from "styled-components";
// import image from "../image/logo.jpg";

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
        </Container>
    )
}

export default MainPage;

const Container = styled.div`
    width: 100vw;
    height: 100%;
    // background-color: red;
`;

const Navbar = styled.nav`
    width: 100vw;
    height: 110px;
    background-color: white;
    margin: 0 auto;
    border-bottom: 1px solid lightgray;
    display: flex;
    
`;

const NavSection = styled.div`
width: 80vw;
display: flex;
margin: 0 auto;

img {
    cursor: pointer;
    width: 80px;
    height: 80px;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 20px;
}
div {
    width: 150px;
    font-size: 30px;
}
ul {
    display: flex;
    justify-content: space-between;
    list-style:none;
    width: 420px;
    li {
       line-height: 120px;
       text-align: center;
       width: 90px;
       color: white;
       font-weight: bold;
       font-size: 17px;
       cursor: pointer;
       color: #333333;
       &:hover {
        color: #ffbc40;
      }
    }
}
`;
