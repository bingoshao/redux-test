import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'

import {addPerson} from '../../redux/actions/person'
class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''

    }
    render() {
        return (
            <div>
                <h3>上方Count:{this.props.count}</h3>
                <input ref={c=>this.nameNode = c}type="text" placeholder="输入名字" /><br/>
                <input ref={c=>this.ageNode = c}type="text" placeholder="输入年龄" /><br/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.person.map(p => {
                            return <li key={p.id}>{p.name}---{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}



export default connect(
    state => ({person:state.persons,count:state.sum}), // 映射状态
    {
        addPerson
    }
)(Person)