import { useState } from 'react';
import Layout from '../components/Layout';
import { CategorySection } from './Money/CategorySection';
import { RecordItem, useRecords } from '../hooks/useRecords';
// import { IconWithColor } from 'components/IconWithColor';
import { useTags } from 'hooks/useTags';
import styled from 'styled-components';
import day from 'dayjs';
import RecordSlideItem from 'components/RecordSlideItem';
const Tab = styled.div`
    position:absolute;
    top:0;
    width:100vw;
`
const List = styled.div`
    margin-top:60px;
    flex-grow:1;
    overflow:auto;
    >.no-content{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:128px;
        font-size: 18px;
        font-weight: bolder;
    }
`
const Main = styled.div`
    background:#FFF;
`


const Header = styled.h3`
    font-size:18px;
    line-height:20px;
    padding:10px 16px;
    background:#dfe6e9  ;
`
function Statistics() {
    const [category, setCategory] = useState<'+' | '-'>('-')
    const { records, deleteRecord } = useRecords()
    const { findTag } = useTags()
    const selectedRecords = records.filter(r => r.category === category)
    const hash: { [K: string]: RecordItem[] } = {}
    selectedRecords.forEach(r => {
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
    const [touchingId, setTouchId] = useState<string>('')
    const changeTouchingId = (id: string) => {
        setTouchId(id)
    }
    return (
        <Layout >
            <Tab>
                <CategorySection value={category} onChange={value => setCategory(value)} />
            </Tab>
            <List>
                {
                    array.length === 0 ? <div className="no-content">无记录</div> : array.map(([date, records]) => <div key={date}>
                        <Header>{date}</Header>
                        <Main >
                            {records.map(r => {
                                return (
                                    <RecordSlideItem record={r} key={r.createdAt} findTag={findTag} touchingId={touchingId} changeTouchingId={changeTouchingId} deleteRecord={deleteRecord}></RecordSlideItem>
                                )
                            })}
                        </Main>

                    </div>)
                }
            </List>
        </Layout>
    );
}
export default Statistics