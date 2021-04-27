import styled, { keyframes } from "styled-components"
import Icon from './Icon'
import { IconSelectPad } from "./IconSelectPad";
const hideAnimation = keyframes`
  from {
    top:10vh;
  }

  to {
    top:100%;
  }
`;

const showAnimation = keyframes`
  from {
    top:100%;
  }

  to {
    top:10vh;
  }
`;

const Wrapper = styled.div<{ change?: string }>`
    height:90vh;
    width:100vw;
    position: absolute;
    top:100%;
    border-radius:8px;
    background:#FFF;
    z-index:10;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:16px;
    >.top-close{
        align-self:flex-end;
    }
    >.icon-list{

    }
    animation-name:${(props) => {
    if (props.change === 'yes') {
      return showAnimation
    } else if (props.change === 'no') {
      return hideAnimation
    } else {
      return ''
    }
  }};
    animation-duration: 1s;
    animation-fill-mode:forwards;
`

type Tag = {
  id: number, name: string, color: string, iconName: string
}
type Props = {
  change: string,
  setChange: React.Dispatch<React.SetStateAction<string>>,
  new: Tag,
  setNew: React.Dispatch<React.SetStateAction<Tag>>
}
const IconSelectPadWrapper: React.FC<Props> = (props) => {
  const hideIconPad = () => {
    props.setChange('no')
  }
  return (
    <Wrapper change={props.change} >
      <Icon name="close" className="top-close" onClick={hideIconPad}></Icon>
      <IconSelectPad new={props.new} setNew={props.setNew} />
    </Wrapper>
  )
}
export { IconSelectPadWrapper }