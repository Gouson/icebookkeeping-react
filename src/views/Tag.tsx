import { useParams, useHistory } from "react-router";
import styled from "styled-components";
import { useTags } from "hooks/useTags"
import Icon from "../components/Icon";
import { TagLi } from '../components/TagLi'
import { Input } from '../components/Input'
import React, { useEffect, useState } from "react";
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
    >main{
        margin-top:8px;
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
const InputWrapper = styled.div`
    padding:0 16px;
    background:white;
`
const Tag: React.FC = () => {
    const { findTag, updateTag, deleteTag } = useTags();
    let { id: idString } = useParams<Params>();
    const [isDisabled, setIsDisabled] = useState(true)
    const tag = findTag(parseInt(idString))
    const [newTag, setNewTag] = useState(tag)
    const editable = () => {
        setIsDisabled(false)
        setNewTag(tag)
    }
    const history = useHistory()
    const onClickBack = () => {
        history.goBack()
    }
    let tagContent

    if (newTag) {
        tagContent =
            <Wrapper>
                <header >
                    <span className="back" onClick={onClickBack}>
                        <Icon name="heart" ></Icon>
                        <span>返回</span>
                    </span>
                    <TagLi iconName={newTag.iconName} name={newTag.name} color={newTag.color}></TagLi>
                </header>
                <main>
                    <InputWrapper>
                        <Input label="标签名称" disabled={isDisabled} value={newTag.name}
                            onChange={(e) => {
                                setNewTag({ ...newTag, name: e.target.value })
                            }}
                        ></Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Input label="图标" disabled={isDisabled} value={newTag.iconName}
                            onChange={(e) => {
                                setNewTag({ ...newTag, iconName: e.target.value })
                            }}
                        ></Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Input label="图标颜色" disabled={isDisabled} value={newTag.color}
                            onChange={(e) => {
                                setNewTag({ ...newTag, color: e.target.value })
                            }}
                        ></Input>
                    </InputWrapper>
                </main>
                <footer>
                    <button onClick={() => { updateTag(newTag.id, newTag); onClickBack() }}>保存</button>
                    <div className="line"></div>
                    <button onClick={() => deleteTag(newTag.id)}>删除</button>
                </footer>
            </Wrapper >
    } else if (tag) {
        tagContent =
            <Wrapper>
                <header >
                    <span className="back" onClick={onClickBack}>
                        <Icon name="heart" ></Icon>
                        <span>返回</span>
                    </span>
                    <TagLi iconName={tag.iconName} name={tag.name} color={tag.color}></TagLi>
                </header>
                <main>
                    <InputWrapper>
                        <Input label="标签名称" disabled={isDisabled} value={tag.name}
                        ></Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Input label="图标" disabled={isDisabled} value={tag.iconName}
                        ></Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Input label="图标颜色" disabled={isDisabled} value={tag.color}
                        ></Input>
                    </InputWrapper>
                </main>
                <footer>
                    <button onClick={editable}>编辑</button>
                    <div className="line"></div>
                    <button onClick={() => deleteTag(tag.id)}>删除</button>
                </footer>
            </Wrapper >

    } else {
        tagContent = <div>不存在</div>
    }
    return tagContent

}
export { Tag }