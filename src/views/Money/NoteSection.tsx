import styled from "styled-components"
import { useState } from 'react';

const Wrapper = styled.section`
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

const NoteSection: React.FC = () => {
    const [note, setNote] = useState('')
    console.log(note)
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder="在这里添加备注" value={note} onChange={(e) => setNote(e.target.value)} />
            </label>
        </Wrapper>)
}
export { NoteSection }