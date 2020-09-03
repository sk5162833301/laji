import React, { Component } from 'react'
import EventHub from "../utils/event-hub"

export default class Two extends Component {
    state = {
        color:"red"
    }
    componentDidMount(){
        // 需要监听事件
        EventHub.on("bianse",color=>{
            this.setState({
                color
            })
        })
    }

    // changeColor = ()=>{
    //     this.setState({
    //         color:"yellow"
    //     })
    // }
    render() {
        return (
            <div>
                <span style={{color:this.state.color}}>Two</span>
            </div>
        )
    }
}
