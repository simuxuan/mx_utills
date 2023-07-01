import fc from './src/fc/index.js'

// 这样暴露出去，导入直接就是这个对象
export {
    fc
}

// 相当于 { fc } == _.default 
// export default {
//     fc
// }