import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";
const NavWrapper = styled.nav`
    background:#ffffff;
    line-height:24px;
    box-shadow:0 0 3px rgba(0,0,0,0.25);
    >ul{
    display: flex;
    >li{
        width:33.3%;
        text-align:center;
        >a{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            padding:4px 0;
            color:#333;
            >.icon{
                width:24px;
                height:24px;
                fill:#333;
                &.selected_icon{
                    display: none;
                }
            }
            &.selected{
                color:#3E3E9B;
            .icon{
                display:none;
                &.selected_icon{
                    display: inline-block;
                }
            }
            }
        }
    }
    }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/money" activeClassName="selected"><Icon name="money" /><Icon className="selected_icon" name="money_color" />记账</NavLink>
                </li>
                <li>
                    <NavLink to="/tags" activeClassName="selected"><Icon name="tag" /><Icon className="selected_icon" name="tag_color" />标签</NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected"><Icon name="chart" /><Icon className="selected_icon" name="chart_color" />统计</NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav