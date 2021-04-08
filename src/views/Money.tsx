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
        background:#ffffff;
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
                <label><span>备注</span><input type="text" placeholder="在这里添加备注"/></label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div>
                    100
                </div>
                <div>
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
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    );
}
export default Money