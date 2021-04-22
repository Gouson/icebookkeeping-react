import Layout from '../components/Layout';
import styled from 'styled-components';
import { NoteSection } from './Money/NoteSection';
import { CategorySection } from './Money/CategorySection';
import { NumberPadSection } from './Money/NumberPadSection';
import { TagsSection } from './Money/TagsSection';
import { useState } from 'react';
import { useRecords } from 'hooks/useRecords';
import { useTags } from 'hooks/useTags';
import { IconWithColor } from 'components/IconWithColor';
import { TodayRecords } from '../components/TodayRecords'
const MyLayout = styled(Layout)`
   display: flex;
   flex-direction:column;
   .notes-tags{
       display:flex;
       justify-content:space-around;
       align-items:center;
       position: relative;
       .tags-section-wrapper{
           width:100vw;
            transition:ease 1s linear ;
            position: absolute;
            bottom:-130px;
            z-index:10;
            &.show{
                display:block;
            }
            &.hidden{
                display:none;
            }
        }
   }
`
type Category = '-' | '+'
const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
}

function Money() {
    const [selected, setSelected] = useState(defaultFormData)
    type Selected = typeof selected;
    const onChange = (obj: Partial<Selected>) => {
        setSelected({ ...selected, ...obj })
    }
    const { findTag } = useTags()
    const { addRecord } = useRecords()
    const submit = () => {
        const resultStatus = addRecord(selected)
        if (resultStatus) {
            alert('保存成功')
            setSelected(defaultFormData)
            setShowTagsSeciton(false)
        }

    }
    const [showTagsSeciton, setShowTagsSeciton] = useState(false)
    const toggleTagsSection = () => {
        setShowTagsSeciton(!showTagsSeciton)
    }
    return (

        <MyLayout >

            <TodayRecords>

            </TodayRecords>


            <div className="notes-tags">
                <div className={showTagsSeciton ? 'tags-section-wrapper show' : 'tags-section-wrapper hidden'}>
                    <TagsSection value={selected.tagIds} onChange={tagIds => onChange({ tagIds })} />
                </div>

                <NoteSection value={selected.note} onChange={note => onChange({ note })} />
                <div onClick={toggleTagsSection}>
                    {
                        selected.tagIds.length <= 0 ?
                            <IconWithColor iconName={'defaultTag'}></IconWithColor> :
                            <div><IconWithColor iconName={findTag(selected.tagIds[0]).iconName} color={findTag(selected.tagIds[0]).color} /></div>
                    }
                </div>
            </div>
            <CategorySection value={selected.category} onChange={category => onChange({ category })} />
            <NumberPadSection value={selected.amount} onChange={value => onChange({ amount: value })} onOk={submit} />
        </MyLayout >
    );
}
export default Money