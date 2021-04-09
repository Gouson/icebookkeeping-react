import { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.section`
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
const CategorySection: React.FC = () => {
    const categoryMap = { '-': '支出', '+': '收入' }
    // type X = typeof categoryMap
    // type Y=keyof X
    // type Keys=keyof typeof categoryMap
    // const [categoryList] = useState<Keys[]>(['-', '+']) 
    const [categoryList] = useState<('-'|'+')[]>(['-', '+']) 
    const [category, setCategory] = useState('-')

    return (
        <Wrapper>
            <ul>
                {categoryList.map(c =>
                    <li className={category === c ? 'selected' : ''}
                        onClick={() => setCategory(c)} key={c}>{categoryMap[c]}</li>
                )}
            </ul>
        </Wrapper>
    )
}
export { CategorySection }