import styled from "styled-components"
import { useTags } from "hooks/useTags"
import { TagLi } from '../../components/TagLi'
const Wrapper = styled.section`
    background:#ffffff;
    >ol{
        display:flex;
        overflow:scroll;
        width:100vw;
        >.tagWrapper{
            padding:0 16px;
            >li{
                >span{
                    padding:0 8px;
                }
                &.selected{
                    >span{
                        background:#5161C4;
                        color:#ffffff;
                    }
                }
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

type Props = {
    value: number[];
    onChange: (selected: number[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
    const { tags } = useTags()
    const selectedTagIds = props.value;


    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds?.indexOf(tagId)
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId))
        } else {
            props.onChange([...selectedTagIds, tagId])
        }
    }

    const getClass = (tagId: number) => {
        return selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''
    }
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <div className="tagWrapper" key={tag.id}>
                        <TagLi iconName={tag.iconName} name={tag.name} color={tag.color} onClick={() => { onToggleTag(tag.id) }} className={getClass(tag.id)}></TagLi>
                    </div>)}
            </ol>
        </Wrapper>
    )
}
export { TagsSection }