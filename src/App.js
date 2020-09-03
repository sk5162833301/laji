

// import是静态导入，require是动态导入
import React from 'react';
// import React,{Component} from 'react';
// import A,{c} from "./a"
// import * as A from "./a"
// import Form from "./components/Form"
// import Todos from "./components/Todos"
// import Other from "./components/Other"
// import TodoList from "./components/TodoList"
import Proxy from "./components/Proxy"

const Component = React.Component
// 定义了react的类组件
class App extends Component{
  render(){
    // console.log(A,c)
    return (
      <div>
        {/* <Form/> */}
        {/* <Todos></Todos> */}
        {/* <Other /> */}
        {/* <TodoList></TodoList> */}
        <Proxy></Proxy>
      </div>
    )
  }
}
export default App;
