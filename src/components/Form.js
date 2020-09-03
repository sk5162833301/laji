import React, { Component } from 'react'

export default class Form extends Component {
    // constructor(){
    //     super()
    //     this.state = {

    //     }
    // }
    state = {
        value:"123",
        flag:true
    }
    render() {
        return (
            <div>
                {/* 表单元素的处理 */}
                <label htmlFor="user">用户：</label> 
                <input id="user" value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}} />
                <input defaultValue="我是默认值" />
                <input type="checkbox" checked={this.state.flag} onChange={()=>{this.setState({flag:!this.state.flag})}} />
                <input type="checkbox" defaultChecked />
            </div>
        )
    }
}
