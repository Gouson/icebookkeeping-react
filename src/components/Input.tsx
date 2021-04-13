import styled from "styled-components"

const Label = styled.label`
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
`

type Props = {
    label: string
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<Props> = (props) => {
    const { label, ...rest } = props
    return (
        <Label>
            <span>{label}</span>
            {/* <input type="text" placeholder={placeholder} defaultValue={defaultValue} onBlur={onBlur} /> */}
            <input {...rest} />
        </Label>
    )
}

export { Input }