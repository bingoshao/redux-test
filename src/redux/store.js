/* 
    该文件专门用于暴露一个store对象,整个应用只有一个store对象
*/
//1.引入createStore,专门用于创建redux中最为核心的store对象

import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


// 引入汇总之后的reducers
import reducers from './reducers'

// 引入redux-thunk，用于支持异步action


//3.暴露store applyMiddleware(thunk)
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
