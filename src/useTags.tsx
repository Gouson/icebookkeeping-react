import { createId } from "lib/createId";
import { useState } from "react";

const defaultTags = [
    { id: createId(), name: '衣', color: '#1abc9c', iconName: 'snacks' },
    { id: createId(), name: '食', color: '#3498db', iconName: 'snacks' },
    { id: createId(), name: '住', color: '#f1c40f', iconName: 'snacks' },
    { id: createId(), name: '行', color: '#e74c3c', iconName: 'snacks' },
    { id: createId(), name: '玩', color: '#9b59b6', iconName: 'snacks' }
]
const useTags = () => {//封装自定义hook
    const [tags, setTags] = useState<{ id: number, name: string, color: string, iconName: string }[]>(defaultTags)
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
    const findTagIndex = (id: number) => {
        let result = -1
        for (let i = 0; i < tags.length; i++) {
            const element = tags[i];
            if (element.id === id) {
                result = i
                break;
            }

        }
        return result;
    }
    const updateTag = (id: number, obj: { name: string, color?: string, icon?: string }) => {
        const index = findTagIndex(id)
        const tagsClone = JSON.parse(JSON.stringify(tags))
        tagsClone.splice(index, 1, { id, ...obj })
        setTags(tagsClone)
        console.log(tagsClone)
        console.log(tags)
    }
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id))
    }
    return {
        tags,
        setTags,
        findTag,
        updateTag,
        deleteTag
    }
}
export { useTags }