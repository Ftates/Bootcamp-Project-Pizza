import React, { Component } from 'react'
import "./AAAAAAAAAA.css"

export default class AAAAAAAAAAAA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    // handlePizzaContainer = (event) => {
    //   // console.log(event)
    //   // console.log(event.target.children[1])
    //   event.target.children[1].classList.add("show")
    //   console.log(event.target.children[1].classList)
    // }

    handleHeaderClick = (event) => {
      console.log(event)
      event.target.nextSibling.classList.add("show")
    }

    handleclosebox = (event) =>{
      console.log(event.target.offsetParent)
      event.target.offsetParent.classList.remove("show")
    }

  render() {
    return (
      <div>
        {/* {JSON.stringify(this.props.bucketlist)} */}
        <div style={{position:"relative"}}>
          {this.props.bucketlist.map((item,index) => {
            return <div className="individualPizzaDetailContainer" key={index}>
          
              <header onClick={this.handleHeaderClick}>{item.Size} {item.Crust} {item.Topping} Pizza (x{item.Count} servings)</header>
              <span className={'individualPizzaDetailBox'}>
                <button className='' onClick={this.handleclosebox}>X</button>
                <ul>  
                  <p>Following values are per serving size ({item.ServingSize})</p>
                  <li>Serving Grams: {item.ServingGrams} g</li>
                  <li>Calories:{item.Calories} g</li>
                  <li>Calories from Fat:{item.CaloriesfromFat} g</li>
                  <li>Total Fat:{item.TotalFat} g</li>
                  <li>Saturated Fat:{item.SaturatedFat} g</li>
                  <li>Trans Fat{item.TransFat} g</li>
                  <li>Cholesterol:{item.Cholesterol} g</li>
                  <li>Sodium:{item.Sodium} mg</li>
                  <li>Carbohydrates:{item.Carbohydrates}</li>
                  <li>Dietary Fiber:{item.DietaryFiber}</li>
                  <li>Sugars:{item.Sugars}</li>
                  <li>Protein:{item.Protein}</li>
                </ul>
              </span>
            {/* <button onClick={() => console.log(this.state)}>snail check</button> */}
            </div>
          })}
        </div>
      </div>
    )
  }
}
