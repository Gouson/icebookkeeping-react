import styled from "styled-components"
import Icon from "../components/Icon";
const Wrapper = styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:8px;
    margin:4px 0;
    .icon-wrapper{
        padding:8px;
        border-radius:50%;
        background:#bdc3c7;
    }
    .icon-main{
        font-size:32px;
    }
    >span{
        display:inline-block;
        border-radius:4px;
        margin-top:16px;
    }
`
type Props = {
    iconName: string,
    name: string,
    color?: string
}
const TagLi: React.FC<Props> = (props) => {
    return (
        <Wrapper>
            <div className="icon-wrapper" style={props.color ? { background: props.color } : {}}>
                <Icon className="icon-main" name={props.iconName} />
            </div>
            <span>{props.name}</span>
        </Wrapper>

    )
}
export { TagLi }