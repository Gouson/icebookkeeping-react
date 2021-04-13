import { createId } from "lib/createId";
import { useState } from "react";

const defaultTags = [
    { id: createId(), name: '衣', color: '#1abc9c' },
    { id: createId(), name: '食', color: '#3498db' },
    { id: createId(), name: '住', color: '#f1c40f' },
    { id: createId(), name: '行', color: '#e74c3c' },
    { id: createId(), name: '玩', color: '#9b59b6' }
]
const useTags = () => {//封装自定义hook
    const [tags, setTags] = useState<{ id: number, name: string, color: string }[]>(defaultTags)
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
    return {
        tags,
        setTags,
        findTag
    }
}
export { useTags }