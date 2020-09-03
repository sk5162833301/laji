import React, { Component } from 'react'

export default class Input extends Component {
    handleKeyUp = e=>{
        // 需要将父组件的list后面追加e.target.value
        // 子组件拿到父组件更改自身状态的方法，并调用，改变其父组件的状态
        if(e.keyCode === 13){
            this.props.add(e.target.value)
            e.target.value = ""
        }
    }
    render() {
        return (
            <input onKeyUp={this.handleKeyUp} />
        )
    }
}
