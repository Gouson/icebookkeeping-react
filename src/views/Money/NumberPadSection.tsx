import { Wrapper } from './NumberPadSection/Wrapper'
import { generateOutput } from './NumberPadSection/generateOutput'
import { useState } from 'react'
import styled from 'styled-components'
type Props = {
    value: number;
    onChange: (value: number) => void;
    onOk?: () => void;
}

const PadWrapper = styled.div<{ animationName?: string }>`
    @keyframes moveUp
    {
        from { max-height:64px; }
        to { max-height:1024px; }
    }
    @keyframes moveDown
    {
        from { max-height:1024px; }
        to {  max-height:64px; }
    }
    animation:${(props) => props.animationName ? props.animationName : ''};
    animation-duration: 1s;
    animation-fill-mode:forwards;
`
const NumberPadSection: React.FC<Props> = (props) => {
    const [output, _setOutput] = useState(props.value.toString())
    const setOutput = (output: string) => {
        let newOutput: string
        if (output.length > 16) {
            newOutput = output.slice(0, 16)
        } else if (output.length === 0) {
            newOutput = '0'
        } else {
            newOutput = output
        }
        _setOutput(newOutput)
        props.onChange(parseFloat(newOutput))
    }
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        if (text === null) { return }
        if (text === 'OK') {
            props.onOk && props.onOk()
            _setOutput('0')
            return
        }
        if ('0123456789.'.split('').concat(['删除', '清空', 'OK']).indexOf(text) >= 0) {
            setOutput(generateOutput(text, output))
        }

    }
    const [animationName, setAnimationName] = useState('')
    let startX: number, startY: number
    let endX: number, endY: number
    let distanceX: number, distanceY: number
    const touchStart = (e: React.TouchEvent) => {
        startX = e.touches[0].clientX
        startY = e.touches[0].clientY
    }
    const touchMove = (e: React.TouchEvent) => {
        endX = e.touches[0].clientX
        endY = e.touches[0].clientY
    }
    const touchEnd = (e: React.TouchEvent) => {
        distanceX = endX - startX
        distanceY = endY - startY

        if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY < 0) {
            setAnimationName('moveUp')
        } else if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY > 0) {
            setAnimationName('moveDown')
        }
    }
    return (
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <PadWrapper animationName={animationName} className="pad clearfix" onClick={onClickButtonWrapper} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
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
            </PadWrapper>
        </Wrapper>
    )
}
export { NumberPadSection }