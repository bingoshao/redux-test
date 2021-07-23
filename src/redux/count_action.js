/* 
    该文件专门为Count组件生成action对象
*/


// function createIncreamentAcrion(data) {
//     return { type: 'increment', data }
// }

// function creatDecreamentAcrion(data) {
//     return { type: 'decrement', data }
// }
import { INCREMENT,DECREMENT} from './constant'
export const createIncreamentAcrion = data => ({ type: INCREMENT, data })
export const creatDecreamentAcrion = data => ({ type: DECREMENT, data })
