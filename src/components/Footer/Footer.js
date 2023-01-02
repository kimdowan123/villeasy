import styled from "styled-components";

function Footer() {
    return (
        <FooterContent>
            <FooterBox>
                <p>업체명: 빌리지 (캠핑용품대여점)</p>
                <p>대표 : 최지훈</p>
                <p>Tel : 010-2089-8720</p>
                <p>사업자 등록번호 : 805-65-00419</p>
            </FooterBox>
            <FooterBox>
                <p>Email : wlgns8720@gmail.com</p>
                <p>주소 : 경상남도 창원시 의창구 팔용로447번길 22 1/2층</p>
            </FooterBox>
        </FooterContent>
    )
}

export default Footer;

const FooterContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(46, 44, 44);
    color: white;
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;

const FooterBox = styled.div`
    width: 300px;
    text-align: left;
    padding-top: 50px;
    padding-bottom: 50px;
`;