import { IconWithColor } from 'components/IconWithColor';
import { Tag } from 'hooks/useTags';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RecordItem } from '../hooks/useRecords';

const RecordItemWrapper = styled.div`
        position:relative;
        overflow: hidden;
`
const RecordItemDiv = styled.div <{ ctnTransformX?: number }> `
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 16px;
    transform:${props => 'translateX(' + props.ctnTransformX + 'px)'};
    transition: transform 260ms ease;
    >.note{
        padding:0 8px;
    }
    >.money{
        flex-grow:1;
        text-align:right;
    };
`
const DeleteButton = styled.div<{ delBtnTransformX?: number }>`
        display:flex;
        justify-content:center;
        align-items:center;
        color:#FFF;
        width: 60px;
        position: absolute;
        right:0;
        top:0;
        height:100%;
        background:#e74c3c;
        transform:${props => 'translateX(' + props.delBtnTransformX + 'px)'};
        transition: transform 260ms ease;
`
type Props = {
    record: RecordItem;
    findTag: (id: number) => Tag;
    touchingId?: string;
    changeTouchingId: (id: string) => void;
    deleteRecord: (id: string) => void
}
function RecordSlideItem(props: Props) {
    const r = props.record
    const findTag = props.findTag
    const [startX, setStartX] = useState<number>(0);
    const [distance, setDistance] = useState<number>(0);
    const [ctnTransformX, setCtnTransformX] = useState<number>(0);
    const [delBtnTransformX, setDelBtnTransformX] = useState<number>(60);
    useEffect(() => {//eslint-disable-line react-hooks/exhaustive-deps
        if (props.touchingId !== r.id) {
            setCtnTransformX(0)
            setDelBtnTransformX(60);
            setDistance(0)
            setStartX(0)
        }
    });
    const touchStart = (e: React.TouchEvent) => {
        props.changeTouchingId(r.id ? r.id : '');
        setStartX(e.changedTouches[0].pageX)
    }
    const touchMove = (e: React.TouchEvent) => {
        setDistance(startX - e.changedTouches[0].pageX)
        setCtnTransformX(-distance)
        setDelBtnTransformX(60 - distance)
        if (ctnTransformX < 0) {
            /*如果是左滑动*/
            if (distance > 60) {
                setCtnTransformX(-60)
                setDelBtnTransformX(0)
            }
        } else {
            /*如果是右滑或者不滑动，保持目前现状*/
            setCtnTransformX(0);
            setDelBtnTransformX(60)
        }
    }
    const touchEnd = (e: React.TouchEvent) => {
        if (distance > 60 * 0.6) {
            setCtnTransformX(-60);
            setDelBtnTransformX(0);
        } else {
            setCtnTransformX(0)
            setDelBtnTransformX(60);
        }
    }
    return (
        <RecordItemWrapper key={r.createdAt} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
            <RecordItemDiv ctnTransformX={ctnTransformX}>
                <IconWithColor iconName={findTag(props.record.tagIds[0]).iconName} color={findTag(r.tagIds[0]).color} />
                <span className="note"> {r.note}</span>
                <span className="money">￥{r.amount}</span>
            </RecordItemDiv>
            <DeleteButton delBtnTransformX={delBtnTransformX} onClick={() => props.deleteRecord(r.id ? r.id : '')}>删除</DeleteButton>
        </RecordItemWrapper>
    );
}
export default RecordSlideItem
