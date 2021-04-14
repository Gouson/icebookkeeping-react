import Layout from '../components/Layout';
import styled from 'styled-components';
import { NoteSection } from './Money/NoteSection';
import { CategorySection } from './Money/CategorySection';
import { NumberPadSection } from './Money/NumberPadSection';
import { TagsSection } from './Money/TagsSection';
import { useState } from 'react';

const MyLayout = styled(Layout)`
   display: flex;
   flex-direction:column;
`
type Category = '-' | '+'
function Money() {
    const [selected, setSelected] = useState({
        tagIds: [] as number[],
        note: '',
        category: '-' as Category,
        amount: 0
    })
    type Selected = typeof selected;
    const onChange = (obj: Partial<Selected>) => {
        setSelected({ ...selected, ...obj })
    }
    return (
        <MyLayout >
            <TagsSection value={selected.tagIds} onChange={tagIds => onChange({ tagIds })} />
            <NoteSection value={selected.note} onChange={note => onChange({ note })} />
            <CategorySection value={selected.category} onChange={category => onChange({ category })} />
            <NumberPadSection value={selected.amount} onChange={amount => onChange({ amount })} onOk={() => { }} />
        </MyLayout>
    );
}
export default Money