/* 
    该文件专门为Count组件生成action对象
*/


// function createIncreamentAction(data) {
//     return { type: 'increment', data }
// }

// function creatDecreamentAction(data) {
//     return { type: 'decrement', data }
// }

import { INCREMENT,DECREMENT} from './constant'

//同步action就是指action的值为Object类型的一般对象
export const createIncreamentAction = data => ({ type: INCREMENT, data })
export const creatDecreamentAction = data => ({ type: DECREMENT, data })

//异步action就是指action的值为函数,异步action中一般都会调用同步action
export const createIncreamentAsyncAction = (data,time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncreamentAction(data))
        },time)
    }
}





