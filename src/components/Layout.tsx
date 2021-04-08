import styled from "styled-components"
import Nav from './Nav'
// import { ReactComponent } from '../react-app-env';
const Wrapper = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
`

const Main = styled.div`
  flex-grow:1;
  overflow:auto;
`

// type Props = {
//     children?: any
// }
const Layout = (props: any) => {
    return (
        <Wrapper>
            <Main>
               {props.children}
            </Main>
            <Nav />
        </Wrapper>
    )
}

export default Layout