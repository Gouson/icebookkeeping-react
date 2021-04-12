import styled from "styled-components"

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
type Props = {
    value: string,
    onChange: (value: string) => void;
}
const NoteSection: React.FC<Props> = (props) => {
    const note = props.value
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder="在这里添加备注" value={note} onChange={(e) => props.onChange(e.target.value)} />
            </label>
        </Wrapper>)
}
export { NoteSection }