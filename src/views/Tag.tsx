import { useParams, useHistory } from "react-router";
import styled from "styled-components";
import { useTags } from "hooks/useTags"
import Icon from "../components/Icon";
import { TagLi } from '../components/TagLi'
import { Input } from '../components/Input'
import React, { useEffect, useState } from "react";
import { IconSelectPadWrapper } from "components/IconSelectPadWrapper";
import { RecordItem, useRecords } from '../hooks/useRecords';
import { TodayRecords } from "components/TodayRecords";
type Params = {
    id: string
}


const Wrapper = styled.div`
    height:100%;
    overflow:hidden;
    position: relative;
    display:flex;
    flex-direction:column;
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
    >.title{
        text-align:center;
        line-height:48px;
    }
    >footer{
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:100%;
        border-top:1px solid #a4b0be;
        >.line{
            height:32px;
            width: 1px;
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
    const { records, findRecordByTag, deleteRecord } = useRecords();
    let { id: idString } = useParams<Params>();
    const [isDisabled, setIsDisabled] = useState(true)
    const tag = findTag(parseInt(idString))
    const [newTag, setNewTag] = useState(tag)

    const [isChangeIcon, setIsChangeIcon] = useState<string>('')
    const [resultRecords, setResultRecords] = useState<RecordItem[]>([])

    useEffect(() => {
        if (tag) {
            setResultRecords(findRecordByTag(tag.id))
        }
    }, [tag,records]);//eslint-disable-line react-hooks/exhaustive-deps
    const editable = () => {
        setIsDisabled(false)
        setNewTag(tag)
    }
    const history = useHistory()
    const onClickBack = () => {
        history.goBack()
    }
    const update = () => {
        if (!newTag.name.trim()) {
            alert('?????????????????????')
            return
        }
        updateTag(newTag.id, newTag)
        onClickBack()
    }
    let tagContent
    const changeIcon = () => {
        setIsChangeIcon('yes')
    }
    const _deleteTag = (id: number) => {
        if (resultRecords.length === 0) {
            if (window.confirm("?????????????")) {
                deleteTag(id);
                onClickBack();
            }
        } else {
            if (window.confirm("???????????????????????????????????????????????????????")) {

                resultRecords.forEach(r => {
                    deleteRecord(r.id!)
                })
                deleteTag(id);
                onClickBack();
            }
        }



        // if (window.confirm("???????????????????????????????????????????????????????")) {
        //     // setTags(tags.filter(tag => tag.id !== id))
        //     console.log('yes')
        // } else {
        //     console.log('no')
        // }
        // deleteTag(id)
        // onClickBack()
    }
    if (newTag) {
        tagContent =
            <Wrapper>
                <header >
                    <span className="back" onClick={onClickBack}>
                        <Icon name="heart" ></Icon>
                        <span>??????</span>
                    </span>
                    <TagLi iconName={newTag.iconName} name={newTag.name} color={newTag.color} onClick={changeIcon}></TagLi>
                </header>
                <main>
                    <InputWrapper>
                        <Input label="????????????" disabled={isDisabled} value={newTag.name}
                            onChange={(e) => {
                                setNewTag({ ...newTag, name: e.target.value })
                            }}
                        ></Input>
                    </InputWrapper>
                    <IconSelectPadWrapper change={isChangeIcon} setChange={setIsChangeIcon} new={newTag} setNew={setNewTag} />
                </main>
                {
                    resultRecords.length === 0 ? '' : <div className="title">???????????????????????????</div>
                }

                <TodayRecords records={resultRecords} message="???????????????????????????" deleteRecord={deleteRecord}>

                </TodayRecords>
                <footer>
                    <button onClick={update}>??????</button>
                    <div className="line"></div>
                    <button onClick={() => { _deleteTag(newTag.id) }}>??????</button>
                </footer>
            </Wrapper >
    } else if (tag) {
        tagContent =
            <Wrapper>
                <header >
                    <span className="back" onClick={onClickBack}>
                        <Icon name="heart" ></Icon>
                        <span>??????</span>
                    </span>
                    <TagLi iconName={tag.iconName} name={tag.name} color={tag.color}></TagLi>
                </header>
                <main>
                    <InputWrapper>
                        <Input label="????????????" disabled={isDisabled} value={tag.name}
                        ></Input>
                    </InputWrapper>
                </main>
                {
                    resultRecords.length === 0 ? '' : <div className="title">???????????????????????????</div>
                }

                <TodayRecords records={resultRecords} message="???????????????????????????" deleteRecord={deleteRecord}>
                </TodayRecords>
                <footer>
                    <button onClick={editable}>??????</button>
                    <div className="line"></div>
                    <button onClick={() => { _deleteTag(tag.id) }}>??????</button>
                </footer>
            </Wrapper >

    } else {
        tagContent = <div>?????????</div>
    }
    return tagContent

}
export { Tag }