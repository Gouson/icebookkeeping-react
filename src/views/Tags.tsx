import Layout from '../components/Layout';
import { useTags } from 'useTags';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TagLi } from '../components//TagLi'
const TagList = styled.ol`
    font-size:16px;
    display:flex;
    flex-wrap:wrap;
    >a{
        width:25%;
    }
    >button{
        width:25%;
    }
    
`
function Tags() {
    const { tags, addTag } = useTags()
    return (
        <Layout >
            <TagList>
                {tags.map(tag =>
                    <Link key={tag.id} to={'/tags/' + tag.id}>
                        <TagLi iconName={'snacks'} name={tag.name} color={tag.color}></TagLi>
                    </Link>
                )}
                <button onClick={addTag}>
                    <TagLi iconName={'add'} name={'新增'} color={'#fff'}></TagLi>
                </button>
            </TagList>
        </Layout>
    );
}
export { Tags }