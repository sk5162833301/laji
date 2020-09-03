import React, { Component } from 'react'
import axios from "axios"
export default class TodoList extends Component {
    state = {
        list:[],
        name:"",
        age:""
    }

    // 代表组件挂在结束，可以在这个钩子函数里面进行异步操作
    componentDidMount(){
        this.find()
    }
    find = ()=>{
        axios.get("http://localhost:4000/list").then(res=>{
            // console.log(res)
            // 拿到数据之后，更改组件自身的状态
            this.setState({
                list:res.data
            })
        })
    }

    // 添加操作
    add = () =>{
        // console.log(this.state.name,this.state.age)
        axios.post("http://localhost:4000/list",{
            name:this.state.name,
            age:this.state.age
        }).then(res=>{
            // console.log("添加数据成功")
            this.find()
        })
    }
    input = e=>{
        this.setState({
            // 输入更改对应的内容
            [e.target.id]:e.target.value
        })
    }

    // 删除操作
    remove = id=>{
        axios.delete("http://localhost:4000/list/"+id).then(res=>{
            this.find()
        })
    }
    // 修改操作
    update = item=>{
        let value = prompt("请输入修改内容",item.name+ " , " +item.age)
        // console.log(value)
        if(value){
            var arr = value.split(",")
            // 派发patch请求
            axios.patch("http://localhost:4000/list/"+item.id,{
                name:arr[0],
                age:arr[1]
            }).then(res=>{
                this.find()
            })
        }
    }

    // 模糊查询
    blurFind = ()=>{
        axios.get("http://localhost:4000/list?name_like="+this.state.name).then(res=>{
            // console.log(res)
            this.setState({
                list:res.data
            })
        })
    }


    render() {
        let {name,list,age} = this.state
        return (
            <div>
                <input id="name" value={name} onChange={this.input} type="text" placeholder="请输入用户名"/>
                <input id="age" value={age} onChange={this.input} type="text" placeholder="请输入年龄"/>
                <button onClick={this.add}>添加</button>
                <button onClick={this.blurFind}>查询</button>
                <button onClick={()=>{this.find()}}>返回</button>
                <ul>
                    {
                        list.map((item,index)=>{
                        return <li 
                            key={index}>{item.name}   
                            {item.age}
                            <button onClick={this.remove.bind(this,item.id)}>删除</button>
                            <button onClick={this.update.bind(this,item)}>修改</button>
                        </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
