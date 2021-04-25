import { RecordItem } from "hooks/useRecords"
import { useTags } from "hooks/useTags"
import styled from "styled-components"
import day from 'dayjs'
import { IconWithColor } from 'components/IconWithColor';
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
type Prop = {
    records: RecordItem[];
    message?: string;
    flexDirection?: string;
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


    return (
        <Wrapper flexDirection={props.flexDirection}>
            {todayRecordsList.length <= 0 ?
                <NoRecords>{props.message ? props.message : ''}</NoRecords> :
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