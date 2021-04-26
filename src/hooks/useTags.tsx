import { useUpdate } from "hooks/useUpdate";
import { createId } from "lib/createId";
import { useEffect, useState } from 'react';

export type Tag = {
    id: number, name: string, color: string, iconName: string
}
const useTags = () => {//封装自定义hook                                                                                                                                                                                                                                                                                                                                                                                                                   
    const [tags, setTags] = useState<Tag[]>([])
    useEffect(() => {
        // aftermounted
        let localTags = (JSON.parse(window.localStorage.getItem('tags') || '[]'))
        if (localTags.length === 0) {
            localTags = [
                { id: createId(), name: '衣', color: '#1abc9c', iconName: 'snacks' },
                { id: createId(), name: '食', color: '#3498db', iconName: 'snacks' },
                { id: createId(), name: '住', color: '#f1c40f', iconName: 'snacks' },
                { id: createId(), name: '行', color: '#e74c3c', iconName: 'snacks' },
                { id: createId(), name: '玩', color: '#9b59b6', iconName: 'snacks' }
            ];
        }
        setTags(localTags)
    }, []);

    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, tags)

    const findTag = (id: number) => {
        return tags.filter(tag => tag.id === id)[0]
    }
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
    const updateTag = (id: number, obj: { name: string, color: string, iconName: string }) => {
        setTags(tags.map(tag => {
            return tag.id === id ? { id, ...obj } : tag
        }))
    }
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id))
    }
    const addTag = () => {
        const tagName = window.prompt('新标签为')

        if (tagName !== null && tagName !== '') {
            setTags([...tags, { id: createId(), name: tagName, color: '#2c3e50', iconName: 'snacks' }])
        }
    }
    return {
        tags,
        setTags,
        findTag,
        updateTag,
        deleteTag,
        findTagIndex,
        addTag
    }
}
export { useTags }