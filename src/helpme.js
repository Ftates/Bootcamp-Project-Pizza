import PHimportdataList from "./pizzaData.json" 
import "./helpme.css"
import React, { Component } from 'react'
import AAAAAAAAAAAA from "./AAAAAAAAAAAA"

export default class helpme extends Component {
    constructor(props){
        super(props)
        this.state = {
            PHdataList : PHimportdataList,
            crustMatch : false,
            sizeMatch : false,
            toppingMatch : false,
            FoundPizza : {},
            tapOut:false,

            currentSelectionVisible: "",

            PizzaFullDetailList:[],
            sumofServingGrams: 0,
            sumofCalories: 0,
            sumofCaloriesFromFat: 0,
            sumofTotalFat: 0,
            sumofSaturatedFat: 0,
            sumofTransFat: 0,
            sumofCholestrol:0,
            sumofSodium:0,
            sumofCarbohydrates:0,
            sumofDietaryFiber:0,
            sumofSugars:0,
            sumofProtein:0,
            
            


        }
    }


    findPizza = () =>{
            let sumofServingGrams = 0
            let sumofCalories= 0
            let sumofCaloriesFromFat = 0
            let sumofTotalFat = 0
            let sumofSaturatedFat = 0
            let sumofTransFat = 0
            let sumofCholestrol = 0
            let sumofSodium = 0
            let sumofCarbohydrates = 0
            let sumofDietaryFiber = 0
            let sumofSugars = 0
            let sumofProtein = 0
            let FoundPizza = {}
            let PizzaFullDetailList = []
      console.log("currentselection:",this.props.currentSelection)
    this.props.currentSelection.forEach(element => { //TRIPLE FOR LOOP LOL
      let tapout = false
      for(let i=0;i<this.state.PHdataList.length;i++){
        let crust = false
        let size = false
        let topping = false
        
      
        console.log(this.state.PHdataList[i])
        for(const [key,value] of Object.entries(this.state.PHdataList[i])){
          if(key === "Topping"){
            if(element.Topping === value){
              //topping matches
              console.log(key,"topping match")
              // this.setState({toppingMatch:true})
              topping = true
              // console.log(this.state.toppingMatch)
            }
          }
          if(key === "Crust"){
            if(element.Crust === value){
              //crust matches 
              console.log(key,"crust match")
              // this.setState({crustMatch:true})
              crust = true
              // console.log(this.state.crustMatch)
            }
          }
          if(key === "Size"){
            if(element.Size === value){
              //size matches
              console.log(key,"size match")
              // this.setState({sizeMatch:true})
              size = true
              // console.log(this.state.sizeMatch)
            }
          }
            if(crust === true && size === true && topping === true){
              console.log("wtf")//experiment/violate the results here
              
                  FoundPizza = this.state.PHdataList[i]

                  FoundPizza.Count = element.count

                  sumofServingGrams = sumofServingGrams + (Number(FoundPizza.ServingGrams)*element.count)
                  sumofCalories= sumofCalories + (Number(FoundPizza.Calories)*element.count)
                  sumofCaloriesFromFat= sumofCaloriesFromFat + (Number(FoundPizza.CaloriesfromFat)*element.count)
                  sumofTotalFat= sumofTotalFat + (Number(FoundPizza.TotalFat)*element.count)
                  sumofSaturatedFat= sumofSaturatedFat + (Number(FoundPizza.SaturatedFat)*element.count)
                  sumofTransFat= sumofTransFat + (Number(FoundPizza.TransFat)*element.count)
                  sumofCholestrol= sumofCholestrol + (Number(FoundPizza.Cholestrol)*element.count)
                  sumofSodium= sumofSodium + (Number(FoundPizza.Sodium)*element.count)
                  sumofCarbohydrates= sumofCarbohydrates + (Number(FoundPizza.Carbohydrates)*element.count)
                  sumofDietaryFiber= sumofDietaryFiber + (Number(FoundPizza.DietaryFiber)*element.count)
                  sumofSugars= sumofSugars + (Number(FoundPizza.Sugars)*element.count)
                  sumofProtein= sumofProtein + (Number(FoundPizza.Protein)*element.count)
                  //IT WOOOOOOOOOOOOOOOOOOOORKS
                
                  PizzaFullDetailList = [...PizzaFullDetailList, FoundPizza]
                
              
              
                console.log("snaily check:",PizzaFullDetailList)
                tapout = true
                break
            }
        }

        if(tapout===true){
          console.log("THING IS OUT")
          
          break//fuck algos
        }
      };
    });
      this.setState({
      PizzaFullDetailList:PizzaFullDetailList,
      sumofServingGrams: sumofServingGrams,
      sumofCalories: sumofCalories,
      sumofCaloriesFromFat: sumofCaloriesFromFat,
      sumofTotalFat: sumofTotalFat,
      sumofSaturatedFat: sumofSaturatedFat,
      sumofTransFat: sumofTransFat,
      sumofCholestrol: sumofCholestrol,
      sumofSodium: sumofSodium,
      sumofCarbohydrates: sumofCarbohydrates,
      sumofDietaryFiber: sumofDietaryFiber,
      sumofSugars: sumofSugars,
      sumofProtein: sumofProtein,
      })
    }

    
    
  render() {
    return (
      <div>
        {/* {console.log("data passed: ",this.props.currentSelection)} */}
        {/* {console.log("dataset:", this.state.PHdataList)} */}
        {/* {this.props.currentSelection.onChange(this.findPizza)} */}
        
        
        {/* i need this findpizza function to trigger somehow when the data is passed */}
        

        <div className="NutritionSummaryContainer">
          
          <ul className="NutritionSummary">
            <label>Nutritional Information:</label>
            <li>Total Serving Grams:- - - - - {this.state.sumofServingGrams}g</li>
            <li>Total Calories:- - - - - - - - --{this.state.sumofCalories}g</li>
            <li>Total Calories from fat:- - - -{this.state.sumofCaloriesFromFat}g</li>
            <li>Total fat(g):- - - - - - - - - - - {this.state.sumofTotalFat}g</li>
            <li>Total Saturated fat(g):- - - - {this.state.sumofSaturatedFat}g</li>
            <li>Total Trans fat(g):- - - - - - - {this.state.sumofTransFat}g</li>
            <li>Total cholestrol(mg):- - - - - {this.state.sumofCholestrol}g</li>
            <li>Total sodium(mg):- - - - - - -{this.state.sumofSodium}mg</li>
            <li>Total Carbohydrates(g):- - - {this.state.sumofCarbohydrates}g</li>
            <li>Total Dietary Fiber(g):- - - - {this.state.sumofDietaryFiber}g</li>
            <li>Total Sugars(g):- - - - - - - - {this.state.sumofSugars}g</li>
            <li>Total Protein(g):- - - - - - - -{this.state.sumofProtein}g</li>
          </ul>
          <button onClick={this.findPizza}>AAAAAAAAAAAAAAAAAAAAAAAA</button>
        </div>
        <div>
          <div>
            <h4 className="PreviewThing">Preview</h4>
          </div>
          <div className="PreviewContent">
            <AAAAAAAAAAAA bucketlist={this.state.PizzaFullDetailList}/>
          </div>
          
        </div>
      </div>
    )
  }
}
