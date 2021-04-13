import Layout from '../components/Layout';
import { useTags } from 'useTags';
import styled from 'styled-components';
import Icon from "../components/Icon";
import { Link } from 'react-router-dom';
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
    li{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:8px;
        margin:4px 0;
        .icon-wrapper{
            padding:8px;
            border-radius:50%;
            background:#bdc3c7;
        }
        .icon{
            font-size:32px;
        }
        >span{
            display:inline-block;
            border-radius:4px;
            margin-top:4px;
        }
    }
`
function Tags() {
    const { tags } = useTags()
    return (
        <Layout >
            <TagList>
                {tags.map(tag =>
                    <Link key={tag.id} to={'/tags/' + tag.id}>
                        <li><div className="icon-wrapper"><Icon className="icon" name="snacks" /></div><span>{tag.name}</span></li>
                    </Link>
                )}
                <button><li><div className="icon-wrapper" style={{ background: '#fff' }}><Icon className="icon" name="add" /></div><span>新增</span></li>
                </button>
            </TagList>
        </Layout>
    );
}
export { Tags }