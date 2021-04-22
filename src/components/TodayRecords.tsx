import { RecordItem, useRecords } from "hooks/useRecords"
import { useTags } from "hooks/useTags"
import styled from "styled-components"
import day from 'dayjs'
import { IconWithColor } from 'components/IconWithColor';
import { useEffect, useState } from "react";
const Wrapper = styled.div`
    flex-grow:1;
    background:#FFF;
    overflow:auto;
    display:flex;
    flex-direction:column-reverse;
`
const NoRecords = styled.div`
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:18px;
    font-weight:bolder;
`
const TodayListWrapper = styled.div`
    display:flex;
    flex-direction:column-reverse;
`
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
const TodayRecords: React.FC = () => {
    const { records } = useRecords()
    const { findTag } = useTags()

    const todayRecordsList: RecordItem[] = []
    // const [todayRecordsList, setT] = useState<RecordItem[]>([])
    // const array: RecordItem[] = []
    records.forEach(r => {
        const rDate = day(r.createdAt).format('YYYYMMDD')
        if (rDate === day().format('YYYYMMDD')) {
            todayRecordsList.push(r)
        }
    })

    return (
        <Wrapper>
            {todayRecordsList.length <= 0 ?
                <NoRecords>今天还没有记账</NoRecords> :
                <TodayListWrapper>{
                    todayRecordsList.map((r, index) =>
                        <RecordItemDiv key={index}>
                            <IconWithColor iconName={findTag(r.tagIds[0]).iconName} color={findTag(r.tagIds[0]).color} />
                            <span className="note"> {r.note}</span>
                            <span className="money">￥{r.amount}</span>
                        </RecordItemDiv>
                    )
                }</TodayListWrapper>}
        </Wrapper>
    )
}
export { TodayRecords }