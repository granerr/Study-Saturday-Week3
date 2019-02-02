//routes need database contact - not on the front end here
//import Student from '../db/models/students.js'
import React, {Component} from 'react'
import axios from 'axios'
//don't need reactDOM in component bc that talks to index.html (only need to mount app once in the dom)
// import ReactDOM from 'react-dom'

//fetch list of all students from server
//parameters don't apply here!
//keep component consistent with file name

//make new component instance called 'main'
class Main extends Component {

  //construct main
  constructor() {
    //inherit from component class
    super()
    //main's state includes students, an array
    this.state = {
      students: []
    }
  }

  // componentDidMount() {
  //   axios.get('/')
  //   .then(function(response) {
  //     this.setState({
  //       students: response.data
  //     })
  //   })
  // }

  //after mounted
  async componentDidMount() {
    //set response var to axios request to api for students
    //found '/student' route by checking app.js for app.use
    const response = await axios.get('/student')
    //set students on state to response data
    this.setState({
      students: response.data
    })
  }

  //now render the component
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            </tr>
            {/* map students using this.state.students */}
            {
              this.state.students.map(student => (
                <tr key={student.id}>
                <td>
                  {student.firstName} {student.lastName}
                </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

//export so index.js can find and assemble it
export default Main
