// 容器组件 联系UI组件和redux

import React, { Component } from 'react'
import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

//定义UI组件
class Count extends Component {
    //加法
    increment =()=> {
        const {value} = this.selectNumber
        this.props.increment(value*1)
    }
    //减法
    decrement =()=> {
        const {value} = this.selectNumber
        this.props.decrement(value*1)

    }
    //奇数再加
    incrementIfOdd =()=> {
        const {value} = this.selectNumber
        if(this.props.count%2!==0){
            this.props.increment(value*1)
        }
    }
    incrementAsync =()=> {
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1,2000)
    }
    render() {
        console.log(this.props,'xxxxx');
        return (
            <div>
                <h1>当前求和为:{this.props.count}</h1>
                <h3>下方组件总人数:{this.props.personNum}</h3>
                <select ref={c => this.selectNumber = c} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick = {this.increment}>+</button>&nbsp;
                <button onClick = {this.decrement}>-</button>&nbsp;
                <button onClick = {this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick = {this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}

// 使用从connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({count:state.sum,personNum:state.persons.length}),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)

