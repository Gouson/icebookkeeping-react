import Layout from '../components/Layout';
import styled from 'styled-components';
import { NoteSection } from './Money/NoteSection';
import { CategorySection } from './Money/CategorySection';
import { NumberPadSection } from './Money/NumberPadSection';
import { TagsSection } from './Money/TagsSection';
import { useState } from 'react';
import { useRecords } from 'hooks/useRecords';

const MyLayout = styled(Layout)`
   display: flex;
   flex-direction:column;
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

    const { records, addRecord } = useRecords()
    const submit = () => {
        const resultStatus = addRecord(selected)
        if (resultStatus) {
            alert('保存成功')
            setSelected(defaultFormData)
        }
    }
    return (

        <MyLayout >
            <TagsSection value={selected.tagIds} onChange={tagIds => onChange({ tagIds })} />
            <NoteSection value={selected.note} onChange={note => onChange({ note })} />
            <CategorySection value={selected.category} onChange={category => onChange({ category })} />
            <NumberPadSection value={selected.amount} onChange={amount => onChange({ amount })} onOk={submit} />
        </MyLayout >
    );
}
export default Money