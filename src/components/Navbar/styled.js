import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100vw;
    height: 100px;
    background-color: white;
    margin: 0 auto;
    border-bottom: 1px solid lightgray;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 33;
`;

export const NavSection = styled.div`
width: 80vw;
display: flex;
margin: 0 auto;

img {
    cursor: pointer;
    width: 80px;
    height: 80px;
    margin-top: 10px;
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
}
`;

export const Li = styled.li`
    line-height: 105px;
    text-align: center;
    width: 90px;
    color: white;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
    color: ${(props) => (props.mypush === true ? 'orange' : 'gray')};
    
    &:hover {
     color: #ffbc40;
   }
 `;