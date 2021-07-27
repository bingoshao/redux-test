// 容器组件 联系UI组件和redux

// 引入Count的UI组件
import CountUI from '../../components/Count'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'


// 使用从connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({count:state}),
    //mapDispatchToProps
    /* dispatch => (
        {
            increment:number=>dispatch(createIncrementAction(number)),
            decrement:number=>dispatch(createDecrementAction(number)),
            incrementAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
        }
    ) */

    //mapDispatchToProps的简写
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction
    }
)(CountUI)

