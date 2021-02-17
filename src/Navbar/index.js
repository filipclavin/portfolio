import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.ul`
list-style: none;
& > * {
    display: inline-block;
    margin: 3px;
    background-color: black;
    & > * {
        line-height: 25px;
        padding: 5px;
        text-decoration: none;
        color: white;
    }
}
`

function Navbar() {
    return (
        <StyledNav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </StyledNav>
    );
}

export default Navbar;