/* 
    改文件用于汇总所有的store,为一个总的reducer
*/


// 引入combineReducers汇总所有的reducers
import {  combineReducers } from 'redux'

import sum from './count'
import persons from './person'


export default combineReducers({
    sum,
    persons
})

