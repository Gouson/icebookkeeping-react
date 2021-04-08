import styled from "styled-components"

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
export {NotesSection}