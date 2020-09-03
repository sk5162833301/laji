import React, { Component } from 'react'
import List from "./List"
import Input from "./Input"
export default class Todos extends Component {
    state = {
        list:["a","b","c"]
    }
    // 写一个更改自身状态list的方法
    add = (str)=>{
        this.setState({
            list:[...this.state.list,str]
        })
    }
    render() {
        let {list} = this.state;

        return (
            <div>
                {/* 将更改自身状态的方法传递给子组件 */}
                <Input add={this.add} />
                <List list={list} />
            </div>
        )
    }
}
