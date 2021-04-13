import { useState } from "react";
const useTags = () => {//封装自定义hook
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行', '吃', '喝喝喝喝', '玩',  '工作', '学习', '旅行', '礼金'])
    return {
        tags,
        setTags
    }
}
export { useTags }