import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.ul`
list-style: none;
margin-left: 32px;
}
`

const StyledLi = styled.li`
display: inline-block;
margin: 3px;
background: black;
transition: all 0.4s ease-out;

& > * {
    line-height: 25px;
    padding: 5px;
    text-decoration: none;
    color: white;
    transition: all 0.4s ease-out;
}

&:hover {
    background: white;
    & > * {
        color: black;
        padding: 35px;
        transition: all 0.4s ease;
    }
    transition: all 0.4s ease;
}
`

function Navbar() {
    return (
        <StyledNav>
            <StyledLi><Link to="/">Home</Link></StyledLi>
            <StyledLi><Link to="/about">About</Link></StyledLi>
            <StyledLi><Link to="/contact">Contact</Link></StyledLi>
        </StyledNav>
    );
}

export default Navbar;