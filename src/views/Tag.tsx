import { useParams } from "react-router";
import styled from "styled-components";
import { useTags } from "useTags"
import Icon from "../components/Icon";
import { TagLi } from '../components//TagLi'
type Params = {
    id: string
}
const Wrapper = styled.div`
    height:100vh;
    >header{
        border:1px solid red;
        position: relative;
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:64px;
        .back{
            font-size:32px;
            position: absolute;
            left:16px;
            top:16px;
            display:flex;
            align-items:center;
            >span{
                font-size:16px;
                padding-left:8px;
                font-weight:bold;
            }
        }
        .tag-img{
            font-size:48px;
        }
    }
`
const Tag: React.FC = () => {
    const { findTag } = useTags();
    const { id } = useParams<Params>();
    const tag = findTag(parseInt(id))
    return (
        <Wrapper>
            <header >
                <span className="back">
                    <Icon name="heart" ></Icon>
                    <span>返回</span>
                </span>

                <TagLi iconName={tag.iconName} name={tag.name} color={tag.color}></TagLi>
            </header>
        </Wrapper>
    )
}
export { Tag }