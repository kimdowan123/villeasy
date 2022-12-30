import styled from "styled-components";

function MainPage() {
    return (
        <Container>
            <Navbar>
                <h1>빌리지</h1>
                <ul>
                    <li>캠핑용품</li>
                    <li>예약안내</li>
                    <li>Q&A</li>
                    <li>오시는길</li>
                </ul>
            </Navbar>
        </Container>
    )
}

export default MainPage;

const Container = styled.div`
    width: 100vw;
    height: 100%;
    background-color: red;
`;

const Navbar = styled.nav`
    width: 80vw;
    height: 120px;
    background-color: green;
    margin: 0 auto;
    // border: 1px solid red;
    // display: flex;
    ul {
        // display: flex;
        list-style:none;
        border: 1px solid yellow;
        
        li {
           width: 100px;
           border: 1px solid blue;
        }
    }
    
`;