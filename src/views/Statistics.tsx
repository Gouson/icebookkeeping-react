import { useState } from 'react';
import Layout from '../components/Layout';
import { CategorySection } from './Money/CategorySection';
import { RecordItem, useRecords } from '../hooks/useRecords';
import { IconWithColor } from 'components/IconWithColor';
import { useTags } from 'hooks/useTags';
import styled from 'styled-components';
import day from 'dayjs'
const RecordItemDiv = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 16px;
    >.note{
        padding:0 8px;
    }
    >.money{
        flex-grow:1;
        text-align:right;
    }
`
const Header = styled.h3`
    font-size:18px;
    line-height:20px;
    padding:10px 16px;
`
function Statistics() {
    const [category, setCategory] = useState<'+' | '-'>('-')
    const { records } = useRecords()
    const { findTag } = useTags()
    const selectedRecords = records.filter(r => r.category === category)
    const hash: { [K: string]: RecordItem[] } = {}
    selectedRecords.map(r => {
        const key = day(r.createdAt).format('YYYY-MM-DD')
        const value = r
        if (!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(value)
    })

    const array = Object.entries(hash).sort((a, b) => {
        // a[0]b[0]
        if (a[0] === b[0]) {
            return 0
        }
        if (day(a[0]).isAfter(b[0])) {
            return -1
        }
        if (day(a[0]).isBefore(b[0])) {
            return 1
        }
        return 0

    })
    return (
        <Layout >
            <CategorySection value={category} onChange={value => setCategory(value)} />
            {array.map(([date, records]) => <div key={date}>
                <Header>{date}</Header>
                <div>
                    {records.map(r => {
                        return (
                            <RecordItemDiv key={r.createdAt}>
                                <IconWithColor iconName={findTag(r.tagIds[0]).iconName} color={findTag(r.tagIds[0]).color} />
                                <span className="note"> {r.note}</span>
                                {/* <span className="date">{day(r.createdAt).format('YYYY-MM-DD')}</span> */}
                                <span className="money">￥{r.amount}</span>
                            </RecordItemDiv>
                        )
                    })}
                </div>
            </div>)}

        </Layout>
    );
}
export default Statistics