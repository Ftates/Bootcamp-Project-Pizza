import React, { Component } from 'react'

export default class sliceCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:1
      }
    }

    handlePlus = () =>{
        this.setState({
            count: this.state.count + 1
        })
        setTimeout(()=>{
            this.props.updatecount(this.state.count,this.props.id)
        },100)
        
    }
    handleMinus = () =>{
        if(this.state.count === 1)return
        this.setState({
            count: this.state.count - 1
        })
        this.props.updatecount(this.state.count,this.props.id)
    }

  render() {
    return (
      <div>
        <button onClick={this.handleMinus}>-</button>
        <span style={{border:"none"}}>{this.state.count}</span>
        <button onClick={this.handlePlus}>+</button>
      </div>
    )
  }
}
