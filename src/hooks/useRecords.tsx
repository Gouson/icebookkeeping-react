import { useEffect, useState } from "react"
import { useUpdate } from "./useUpdate"
import { generateUUID } from '../lib/createUUID'
export type RecordItem = {
    id?: string,
    tagIds: number[],
    note: string,
    category: '+' | '-',
    amount: number,
    createdAt: string,
    updatedAt: string //ISO 8601
}

type newRecordItem = Omit<RecordItem, 'createdAt' | 'updatedAt'>
export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    }, []);
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
    }, [records])
    const addRecord = (newRecord: newRecordItem) => {
        if (newRecord.amount <= 0) { alert('金额不能为0'); return false }
        if (newRecord.tagIds.length === 0) { alert('请选择标签'); return false }
        const record = { ...newRecord, createdAt: (new Date()).toISOString(), updatedAt: '', id: generateUUID() }
        setRecords([...records, record])
        return true
    }
    const findRecordByTag = (tag: number) => {
        return records.filter(r => {
            const i = r.tagIds.indexOf(tag)
            if (i !== -1) {
                return true;
            } else {
                return false;
            }
        })
    }
    const deleteRecord = (id: string) => {
        const index = records.findIndex(r => r.id === id ? true : false)
        records.splice(index, 1)
        setRecords(records)
    }
    return {
        records,
        addRecord,
        findRecordByTag,
        deleteRecord
    }
}