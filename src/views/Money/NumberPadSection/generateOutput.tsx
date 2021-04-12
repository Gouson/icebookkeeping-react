
const generateOutput = (text: string, output = '0') => {
    switch (text) {
        case '删除':
            if (output.length === 1) {
                return '0'
            } else {
                return output.slice(0, -1) || ''
            }
        case '清空':
            return ('');
        case '.':
            if (output.indexOf('.') >= 0) { return output }
            else {
                return output + '.'
            }
        default:
            if (output === '0') {
                return text
            } else {
                return output + text
            }
    }
}

export { generateOutput }