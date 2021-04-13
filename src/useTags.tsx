import { useState } from "react";
const useTags = () => {//封装自定义hook
    const [tags, setTags] = useState<{ id: number, name: string, color: string }[]>([
        { id: 1, name: '衣', color: '#1abc9c' },
        { id: 2, name: '食', color: '#3498db' },
        { id: 3, name: '住', color: '#f1c40f' },
        { id: 4, name: '行', color: '#e74c3c' },
        { id: 5, name: '玩', color: '#9b59b6' }
    ])
    return {
        tags,
        setTags
    }
}
export { useTags }