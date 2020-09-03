import React, { Component } from 'react'
import axios from "axios"
export default class Proxy extends Component {
    componentDidMount(){
        // 在这里进行异步请求
        // axios.get("https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=416488",{
        //     headers:{
        //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1597655950537240279187457"}',
        //         'X-Host': 'mall.film-ticket.film.list'
        //     }
        // }).then(res=>{
        //     console.log(res)
        // })
        

        // 请求 http://47.96.0.211:9000/db/in_theaters?limit=8&page=2
        axios.get("/api/db/in_theaters?limit=8&page=2").then(res=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                Proxy
            </div>
        )
    }
}
