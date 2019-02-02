//bring in react and component class
import React, {Component} from 'react'
//bring in reactDOM
import ReactDOM from 'react-dom'
import Main from './components/Main'

ReactDOM.render(<Main />, document.getElementById('app'))

















//create hello component by extending component class
// class Hello extends Component {
//   //render the component
//   render() {
//     //return the following
//     return (
//       //div
//       <div>
//         //hi!!!
//         <h1>Hello React!</h1>
//         //close div
//       </div>
//     )
//   }
// }
// console.log('Hello Webpack!');

//tell reactDOM to render the component
//Hello is called as component, not function(</> instead of just 'Hello')
//second param gets elem by id from index.html so it knows where to slide in
// ReactDOM.render(<Hello />, document.getElementById('app'))

// //export hello component
// export default Hello
