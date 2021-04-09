import { useState } from "react"
import styled from "styled-components"
const Wrapper = styled.section`
    background:#ffffff;
    padding:12px 16px;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-start;
    >ol{
        margin:0 -12px;
        >li{
            background:#f1f2f6;//anti-flash-white
            border-radius:18px;
            display:inline-block;
            padding:3px 18px;
            font-size:14px; 
            margin:8px 12px; 
            &.selected{
                background:#5161C4;
                color:#ffffff;
            }
        }
    }
    >button{
        background:none;
        border:none;
        border-bottom:1px solid #57606f;
        padding:2px 4px;
        margin-top:8px;
    }
`
const TagsSection: React.FC = (props) => {
    const [tags, setTags] = useState<string[]>(['衣', '11', '食', '住', '行'])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const onAddTag = () => {
        const tagName = window.prompt('新标签为')
        if (tagName !== null) {
            setTags([...tags, tagName])
        }
    }

    const onToggleTag = (tag: string) => {
        const index = selectedTags?.indexOf(tag)
        if (index >= 0) {
            //如果tag已被选中，九福之所有没有被选中的tag，做微信的selectedTag
            setSelectedTags(selectedTags.filter(t => t !== tag))
        } else {
            setSelectedTags([...selectedTags, tag])
        }
    }

    const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : ''
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag} onClick={() => { onToggleTag(tag) }} className={getClass(tag)}>{tag}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}
export { TagsSection }