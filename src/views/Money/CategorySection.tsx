import styled from "styled-components"

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

export { CategorySection }