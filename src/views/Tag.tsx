import { useParams } from "react-router";
import styled from "styled-components";
import { useTags } from "useTags"
import Icon from "../components/Icon";
import { TagLi } from '../components//TagLi'
import { useState } from "react";
type Params = {
    id: string
}


const Wrapper = styled.div`
    height:100vh;
    >header{
        position: relative;
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:64px;
        background:#a4b0be;
        color:#fff;
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
    >footer{
        position: absolute;
        bottom:0;
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:100%;
        border-top:2px solid #a4b0be;
        >.line{
            height:32px;
            width: 2px;
            background:#a4b0be;
        }
        >button{
            width:40%;
            padding:12px;
            font-size:22px; 
        }
    }
`
const Tag: React.FC = () => {
    const { findTag } = useTags();
    const { id } = useParams<Params>();
    // const tag = findTag(parseInt(id))
    const [tag, setTag] = useState(findTag(parseInt(id)))
    return (
        <Wrapper>
            <header >
                <span className="back">
                    <Icon name="heart" ></Icon>
                    <span>返回</span>
                </span>
                <TagLi iconName={tag.iconName} name={tag.name} color={tag.color}></TagLi>
            </header>
            <footer>
                <button>编辑</button>
                <div className="line"></div>
                <button>删除</button>
            </footer>
        </Wrapper>
    )
}
export { Tag }