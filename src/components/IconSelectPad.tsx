import { useState } from "react"
import styled from "styled-components"
import Icon from './Icon'
const Wrapper = styled.div`
    >.colors{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        width:80vw;
        margin:16px;
    }
    >.icons{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        width:80vw;
        margin:16px;
    }
`
const ColorItem = styled.div<{ color?: string, selectedColor?: string }>`
    background:${props => props.color};
    height:9vw;
    width:9vw;
    margin:4px 0;
    border-radius:50%;
    transform:${props => props.selectedColor === props.color ? 'scale(1.1)' : ''};
`
const IconItem = styled.div<{ icon?: string, selectedIcon?: string, selectedColor?: string }>`
    width:20vw;
    height:20vw;
    font-size:32px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 50%;
    background:${props => props.selectedIcon === props.icon ? (props.selectedColor ? props.selectedColor : '#74b9ff') : ''};
`
const colorList = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6',
    '#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1',
    '#16a085', '#27ae60', '#2980b9', '#8e44ad',
    '#f39c12', '#d35400', '#c0392b', '#bdc3c7']
const iconList = ['transport', 'clothes', 'rent', 'snacks', 'handle']

type Tag = {
    id: number, name: string, color: string, iconName: string
}
type Props = {
    new: Tag,
    setNew: React.Dispatch<React.SetStateAction<Tag>>
}
const IconSelectPad: React.FC<Props> = (props) => {
    const selectColor = (color: string) => {
        setSelectedColor(color)
        props.setNew({ ...props.new, color: color })
    }
    const selectIcon = (icon: string) => {
        setSelectedIcon(icon)
        props.setNew({ ...props.new, iconName: icon })
    }

    const [selectedIcon, setSelectedIcon] = useState('')
    const [selectedColor, setSelectedColor] = useState('')
    return (
        <Wrapper>
            <section className="colors">
                {colorList.map(color =>
                    <ColorItem key={color} onClick={() => { selectColor(color) }} color={color} selectedColor={selectedColor}></ColorItem>
                )}
            </section>
            <section className="icons">
                {iconList.map(icon =>
                    <IconItem key={icon} onClick={() => { selectIcon(icon) }} icon={icon} selectedIcon={selectedIcon} selectedColor={selectedColor}>
                        <Icon name={icon}></Icon>
                    </IconItem>
                )}
            </section>
        </Wrapper>
    )
}

export { IconSelectPad }