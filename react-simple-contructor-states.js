// What is a state

// Simplest state
// state = {
//     count: 0
// }

// constructor first function executed
//To bind methods, you need to implement a constructor for your React component.
constructor(props) {
    super(props)

    this.state = {
        count: 0
    }
}
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div>
          //onClick is the action for the state
          <button onClick={this.increment} className="btn btn-primary">Increment</button>
          <button onClick={this.decrement} className="btn btn-primary">Decrement</button>
          
          //shows in the h1
          <h1>{this.state.count}</h1>
        </div>
      </div>
    )
  }
}
    
