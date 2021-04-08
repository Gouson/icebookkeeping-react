import Layout from '../components/Layout';
import styled from 'styled-components';

const TagsSection = styled.section`
    background:#ffffff;
    padding:12px 16px;
    >ol{
        margin:0 -12px;
        >li{
            background:#f1f2f6;//anti-flash-white
            border-radius:18px;
            display:inline-block;
            padding:3px 18px;
            font-size:14px; 
            margin:8px 12px; 
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
const NotesSection = styled.section`
    padding:0 16px;
    font-size:14px;
    >label{
        display:flex;
        align-items:center;
        >span{
            white-space:nowrap;
            margin-right:16px;
        }
        >input{
            background:transparent;
            display:block;
            width:100%;
            height:72px;
            border:none;
        }
    }
`
const CategorySection = styled.section`
    font-size:24px;
    >ul{
        display:flex;
        background:#ced6e0;
        >li{
            width:50%;
            text-align:center;
            padding:16px 0;
            position: relative;
            &.selected::after{
                content:'';
                display:block;
                height:3px;
                background:#5161C4;
                position: absolute;
                bottom:0;
                left:0;
                width:100%;
            }
        }
    }
`
const NumberPadSection = styled.section`
    display:flex;
    flex-direction:column;
    > .output{
        background:#ffffff;
        font-size:36px;
        line-height:72px;
        text-align:right;
        padding:0 16px;
        box-shadow:inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                    inset 0 5px 5px -5px rgba(0,0,0,0.2);
    }
    > .pad{
        overflow:hidden;
        >button{
            font-size:18px;
            float:left;
            width:25%;
            height:64px;
            color:#ffffff;
            border:none;
            &.ok{
                height:128px;
                float:right;
            }
            &.zero{
                width:50%
            }
            &:nth-child(1){
                background:#55efc4;
            }
            &:nth-child(2){
                background:#81ecec; 
            }
            &:nth-child(3){
                background:#74b9ff;
            }
            &:nth-child(4){
                background:#a29bfe;
            }
            &:nth-child(5){
                background:#00b894; 
            }
            &:nth-child(6){
                background:#00cec9;
            }
            &:nth-child(7){
                background:#0984e3;
            }
            &:nth-child(8){
                background:#6c5ce7;
            }
            &:nth-child(9){
                background:#ffeaa7; 
            }
            &:nth-child(10){
                background:#fab1a0;
            }
            &:nth-child(11){
                background:#ff7675;
            }
            &:nth-child(12){
                background:#636e72;
            }
            &:nth-child(13){
                background:#fdcb6e;
            }
            &:nth-child(14){
                background:#e17055;
            }
            &:active{
                transform:scale(1.1);
            }
            /* &:nth-child(15){
                background:#d63031;
            }
            &:nth-child(16){
                background:#e84393;
            } */
        }
    }
`
function Money() {
    return (
        <Layout >
            <TagsSection className="tags">
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label><span>备注</span><input type="text" placeholder="在这里添加备注" /></label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div className="output">
                    100
                </div>
                <div className="pad clearfix">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">OK</button>
                    <button className="zero">0</button>
                    <button className="dot">.</button>
                </div>
            </NumberPadSection>
        </Layout>
    );
}
export default Money