import { RecordItem } from "hooks/useRecords"
import { useTags } from "hooks/useTags"
import styled from "styled-components"
import day from 'dayjs'
import RecordSlideItem from 'components/RecordSlideItem';
import { useState } from "react";
const Wrapper = styled.div<{ flexDirection?: string }>`
    flex-grow:1;
    background:#FFF;
    overflow:auto;
    display:flex;
    flex-direction:${(props) => props.flexDirection ? props.flexDirection : 'column'};
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
    flex-direction:column;
`
type Prop = {
    records: RecordItem[];
    message?: string;
    flexDirection?: string;
    deleteRecord: (id: string) => void
}
const TodayRecords: React.FC<Prop> = (props) => {
    const records = props.records
    const { findTag } = useTags()
    const todayRecordsList: RecordItem[] = []
    records.forEach(r => {
        const rDate = day(r.createdAt).format('YYYYMMDD')
        if (rDate === day().format('YYYYMMDD')) {
            todayRecordsList.push(r)
        }
    })

    const [touchingId, setTouchId] = useState<string>('')
    const changeTouchingId = (id: string) => {
        setTouchId(id)
    }
    return (
        <Wrapper flexDirection={props.flexDirection}>
            {todayRecordsList.length <= 0 ?
                <NoRecords>{props.message ? props.message : ''}</NoRecords> :
                <TodayListWrapper>{
                    todayRecordsList.map((r, index) =>
                        <RecordSlideItem record={r} key={r.createdAt} findTag={findTag} touchingId={touchingId} changeTouchingId={changeTouchingId} deleteRecord={props.deleteRecord}></RecordSlideItem>
                    )
                }</TodayListWrapper>}
        </Wrapper>
    )
}
export { TodayRecords }