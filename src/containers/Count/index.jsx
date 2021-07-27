// 容器组件 联系UI组件和redux

// 引入Count的UI组件
import CountUI from '../../components/Count'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'


//mapStateToProps函数返回的对象中的key就作为传递给UI组件的key,value就作为传递给UI组件的props的value--状态
const mapStateToProps = (state) => {
    //react-redux在调用a函数的时候已经把帮你调用了store.getState()拿到了store中的值
    return {count:state}
}

//mapDispatchToProps函数返回的对象中的key就作为传递给UI组件的key,value就作为传递给UI组件的props的value--操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
        increment:number=>dispatch(createIncrementAction(number)),
        decrement:number=>dispatch(createDecrementAction(number)),
        incrementAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    }
}



// 使用从connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

