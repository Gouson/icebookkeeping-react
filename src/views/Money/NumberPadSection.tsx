import styled from "styled-components"
import { useState } from 'react';

const Wrapper = styled.section`
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

const NumberPadSection: React.FC = () => {
    const [output, _setOutput] = useState('0')
    const setOutput = (output: string) => {
        if (output.length > 16) {
            output = output.slice(0, 16)
        } else if (output.length === 0) {
            output = '0'
        }
        _setOutput(output)
    }
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        if (text === null) { return }
        switch (text) {
            case '删除':
                if (output.length === 1) {
                    setOutput('0')
                } else {
                    setOutput(output.slice(0, -1))
                }
                break;
            case '清空':
                setOutput('');
                break;
            case 'OK':
                console.log('确认');
                break;
            case '.':
                if (output.indexOf('.') >= 0) { return }
                else {
                    setOutput(output + '.')
                }
                break;
            default:
                if (output === '0') {
                    setOutput(text);
                } else {
                    setOutput(output + text);
                }

        }
    }
    return (
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <div className="pad clearfix" onClick={onClickButtonWrapper}>
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
        </Wrapper>
    )
}
export { NumberPadSection }