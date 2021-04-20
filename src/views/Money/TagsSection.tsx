import styled from "styled-components"
import { useTags } from "hooks/useTags"
import { TagLi } from '../../components/TagLi'
const Wrapper = styled.section`
    background:#ffffff;
    padding:12px 16px;
    
    /* display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-start; */
    >ol{
        display:flex;
        justify-content:space-space-between;
        overflow:scroll;
        width:100%;
        >li{
            /* background:#f1f2f6;//anti-flash-white
            border-radius:18px;
            display:inline-block;
            padding:3px 18px;
            font-size:14px; 
            margin:8px 12px; 
            &.selected{
                background:#5161C4;
                color:#ffffff;
            } */
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
    // const [selectedTags, setSelectedTags] = useState<string[]>([])
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
        console.log(selectedTagIds)
        return selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''
    }
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    // <li key={tag.id} onClick={() => { onToggleTag(tag.id) }} className={getClass(tag.id)}>{tag.name}</li>
                    <TagLi iconName={tag.iconName} name={tag.name} color={tag.color} key={tag.id} onClick={() => { onToggleTag(tag.id) }} className={getClass(tag.id)}></TagLi>
                )}
            </ol>
        </Wrapper>
    )
}
export { TagsSection }