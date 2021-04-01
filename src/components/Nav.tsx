import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import x from 'icons/money.svg'
const NavWrapper = styled.nav`
line-height:24px;
box-shadow:0 0 3px rgba(0,0,0,0.25);
>ul{
  display: flex;
  >li{
    width:33.3%;
    padding:16px;
    text-align:center;
  }
}
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <img src={x} />
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav