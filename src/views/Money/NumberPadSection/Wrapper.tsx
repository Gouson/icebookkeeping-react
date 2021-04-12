import styled from "styled-components"

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
export { Wrapper }