import MyNavbar from "../../components/Navbar/MyNavbar";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";

function QApage() {
    return (
        <Container>
            <MyNavbar QApage={true} />
            <Section>

                <Box background={'white'}>
                    <h2>무엇을 도와드릴까요?</h2>
                    <p>Q.대여 및 반납 시간이 어떻게 되나요?</p>
                    <p>Q.고객이 준비해야할 물품이 있나요?</p>
                    <p>Q.분실 및 파손시 어떻게 해야 되나요?</p>
                </Box>



                <Box background={'#DCDCDC'}>
                    <h2>고객센터 09:00~24:00</h2>
                    <ul>
                        <li>평일 : 전체 문의 상담 가능</li>
                        <li>주말 : 전체 문의 상담 가능</li>
                    </ul>
                    <h3>📞 010-2224-2131</h3>
                    <BottomBox>1:1 카톡 상담하기</BottomBox>
                    <BottomBox2>
                        <div>이메일 문의하기</div>
                        <div>이메일 주소복사</div>
                    </BottomBox2>
                </Box>

            </Section>
            <Footer />
        </Container>
    )
}

export default QApage;

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Section = styled.div`
    /* width: 100%; */
    height: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;

const Box = styled.div`
    padding: 20px;
    margin-top: 100px;
    width: 500px;
    height: 310px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.background};
    p {
        line-height: 50px;
        margin-left: 20px;
    }
    ul {
        margin-left: 30px;
        font-size: 13px;
        padding: 15px;
    }
`;

const BottomBox = styled.div`
    background-color: orange;
    color: white;
    text-align: center;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
`
const BottomBox2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    div {
        cursor: pointer;
        background-color: white;
        text-align: center;
        color: gray;
        padding: 15px;
        border-radius: 5px;
        width: 49%;
    }
`
