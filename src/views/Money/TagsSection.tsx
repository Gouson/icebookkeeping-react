import styled from "styled-components"
import { useTags } from "hooks/useTags"
import { TagLi } from '../../components/TagLi'
const Wrapper = styled.section`
    background:#ffffff;
    padding:12px 16px;
    >ol{
        display:flex;
        justify-content:space-space-between;
        overflow:scroll;
        width:100%;
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
            //如果tag已被选中，九福之所有没有被选中的tag，做微信的selectedTag
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
                    <TagLi iconName={tag.iconName} name={tag.name} color={tag.color} key={tag.id} onClick={() => { onToggleTag(tag.id) }} className={getClass(tag.id)}></TagLi>
                )}
            </ol>
        </Wrapper>
    )
}
export { TagsSection }