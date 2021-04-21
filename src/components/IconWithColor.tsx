import classNames from "classnames";
import styled from "styled-components"
import Icon from "../components/Icon";
const Wrapper = styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:4px;
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
    color?: string,
    onClick?: () => void
} & React.HTMLAttributes<HTMLDivElement>;
const IconWithColor: React.FC<Props> = (props) => {
    const { iconName, children, className, ...rest } = props
    return (
        <Wrapper onClick={props.onClick} className={classNames(className)}>
            <div className={classNames("icon-wrapper")} style={props.color ? { background: props.color } : {}} {...rest} >
                <Icon className="icon-main" name={props.iconName} />
            </div>
        </Wrapper>
    )
}
export { IconWithColor }